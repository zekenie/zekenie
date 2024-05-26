---
title: Semantic operation layer
description: Configurable, semantic units to organize and understand your app
date: 2021-11-02
tags:
  - architecture
  - programming
layout: post.njk
previewImage: /img/operations/detail.png
---

The last couple of applications I’ve developed have eventually ended up craving a design pattern that I’m starting to call an “operation layer.” I've never fully realized it, but I think I'm onto something here. As with so many things, this may already exist in some form. If so, please tell me about it.

## What

![High level diagram](/img/operations/high-level.png)

Operations are units of action in your application. Your application doesn't do much of anything outside the context of an operation. Create a new user account? That's an operation. Send a reminder email? Another operation. Scheduled script to cleanup dangling data? That's an operation, too.

Operations aren't just HTTP Requests. Jobs are operations. CLI commands are operations. Operations are a wrapper around a unit of work that could be connected to any transport layer.

Operations are code, but they're also data. They exist in the codebase, but at runtime they produce artifacts that can be used to debug, analyse, and understand your users and application. They can be associated with a user, machine, etc.

Operations can even be related to other operations. For example, if a user signs up for your service over HTTP with a `CreateAccount` operation, and a `SendWelcomeEmail` job operation is enqueued on a background process, the `SendWelcomeEmail` operation has a `parentId` referencing `SendWelcomeEmail`.

![Detail level diagram](/img/operations/detail.png)

## Why

- _Semantics_. Operations are a semantic system that's decoupled from your API or transport layer. It's almost your _private_ public API.

- _Configuration_. Operations can have all sorts of declarative metadata (whatever your application calls for... permissions, log levels, database transaction rules) that specify how the operation should work. Depending on your environment, they could be lined up 1:1 with input validation (in the ts world, maybe have 1 [class-validator](https://github.com/typestack/class-validator) class per operation?).

![Configuration table](/img/operations/config.png)

- _Visibility_. They can be tied into your logging, APM, and and error tracking systems, so that you can trace individual events back to a user and an operation. For example, they could produce structured logging artifacts that go into Elasticsearch through `stdout`.

- _Adaptability_. Today you might have a REST api in front of many operations, but you can switch that to a GraphQL API or something else down the road. By disconnecting your transport layer from your semantic layer, you aren't tied down to one technology. You could even go so far as to have Operations be a stepping stone to an event-driven architecture like Event Sourcing/CQRS, in which you persist operation data to a datastore, and have the rest of your application's state _react_ to that data in various projected datastores.

## How would this look?

I'm going to demonstrate the way I imagine this working in a node app. This is fictional code.

```ts
export const CreateAccountOperation = Operation.create({
  name: "createAccountOperation",
  input: CreateAccountInput,
  // the specific configuration options are arbitrary
  // and only intended to be illustrative
  logLevel: LogLevels.INFO,
  allowUnauthenticated: true,
  timeout: 1500,
  maxRetries: 1,
  run: async function (input) {
    const session = userService.createAccount(input);
    return session;
  },
});
```

If we were to expose this operation over HTTP, it would look something like this.

```ts
const createAccountController = (req, res, next) => {
  CreateAccountOperation.run(req.body)
    .then(({ jwt }) => res.status(201).json({ jwt }))
    .catch(next);
};

export default Router().post("/", createAccountController);
```

I imagine `Operation` would make use of node's new [`AsyncLocalStorage`](https://nodejs.org/api/async_context.html#class-asynclocalstorage) class to make use of [Dynamic Scoping](<https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope>)[^1] to share state to every future point in the callstack without passing it directly. In a way, it reminds me of React's `Context`, if you're familiar with it.

I'm imagining something resembling the code sample below. This is pared down from my example for the sake of clarity, but it's basically right.

```ts
export const operationStorage = new AsyncLocalStorage<{
  id: string;
  operationName: string;
  // perhaps userId?
}>();

type OperationConfig = {
  name: string;
  run: () => Promise<unknown>;
  // here's where you put _your_ configuration items
};

class RuntimeOperation {
  private readonly id: string = uuid();

  constructor(private readonly config: OperationConfig) {}

  public async run() {
    return operationStorage.run(
      {
        id: this.id,
        operationName: this.config.name,
      },
      async () => {
        return this.config.run();
      }
    );
  }
}

export class Operation {
  private constructor(readonly config: OperationConfig) {}
  static create(config: OperationConfig) {
    return new Operation(config);
  }

  public async run(): Promise {
    const runtimeOperation = new RuntimeOperation(this.config);
    return runtimeOperation.run();
  }
}
```

### Logging

If you wanted a logger that would always report the operation name and runtime ID, you could wrap your existing logging library like this:

```ts
import bunyan from "bunyan";
import { operationStorage } from "./operation";
const logger = bunyan.createLogger({ name: "log" });

function makeWrappedLogger(level: "info" | "trace" | "debug" | "fatal") {
  return function (statement: Record<string, any>): void {
    const { id, operationName } = operationStorage.getStore() || {};
    logger[level]({ ...statement, id, operationName });
  };
}

export const info = makeWrappedLogger("info");
export const trace = makeWrappedLogger("trace");
export const debug = makeWrappedLogger("debug");
export const fatal = makeWrappedLogger("fatal");
```

If logs are being persisted somewhere searchable, this gives you a lot of power. If you know there's a problem with an operation, you can search for it by name. If you were to add a `userId` to your `operationStorage` you could also search by that.

---

What do you think of this pattern? Tried anything similar? What were the results? Is there a framework or language that makes this easy?

[^1]: I learned about this term from my friend Omri Bernstein. Dynamic scope stands in contrast to lexical scope. To quote Omri, "Lexical scope is all about accessing named references based on code’s _definition_ whereas dynamic scope is all about accessing named references based on code’s _execution_... React context and AsyncLocalStorage give you a _lexical_ reference that you can dereference to get a _dynamic_ reference, which prevents global clashing, and gives you back some of the traceability of lexical scope"
