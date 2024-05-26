---
title: "Work in progress: hookreducer.com"
description: I'm building a platform to ingest and process webhooks insanely well
tags:
  - micro-business
  - webhooks
  - work-in-public
layout: post.njk
date: 2021-12-19
previewImage: /img/hr/logo-square.png
---

> A dev tool that lets you setup an endpoint to accept webhooks **super** easily. It's an order of magnitude easier to get up and running, and covers edge cases so you don't have to worry about it. Additionally, you can capture a little piece of state with a JS reducer function. Think Webhook + Redux (if that analogy makes any sense to you).

I've been a little quiet lately. In my hobby-time, I've been working on a dev-tool micro-business. I think now is a good time to share it with the world! To be clear–this is half-baked stuff. I'm sharing it because I believe that good things can happen when you work in public, and I'm interested in seeing folks' reactions. I also like leaving little time capsules of projects. I always wish I had done this more in the past. So if nothing else, this post will do that.

## The idea: [hookreducer.com](https://hookreducer.com)

![Hook Reducer Logo](/img/hr/logo.png)

(Logo courtesy of the [Be Nice Comic](https://www.instagram.com/the_be_nice_comic/))

There are a lot of places to run code on the internet. This product sets itself apart from Glitch, RunKit, CodeSandbox, etc not just because of what it can do, but also because of what it can't. You can't run any async code. You can't access the network. You can't import any npm packages. What you get instead are special webhook-specific features. It handles idempotency tokens, request authenticity verifications, queueing inbound requests, and more.

![Hook Reducer Prototype Screenshot](/img/hr/screenshot.png)

What makes this super awesome is that when you change the reducer code, you can flow all your historical events through your reducer again to recreate the state. You can even set up an endpoint and leave the reducer function blank! Tell your webhook provider to send over data, and write your reducer code later!

### User Interface Elements

#### Resource Bar

The resource bar is a top level component. It gives you at-a-glance access to important information about how your hook is running, but also how your hook sits relative to other hooks. Clicking on it will likely bring up some kind of modal/popover interface that gives you more access to some of these concepts.

![Resource Bar Screenshot](/img/hr/resource-bar.png)

#### IDE

You write code that runs every time a request is received. You have the opportunity to define a set of functions to configure the hook's behavior, including `reducer`, `getIdempotencyKey` and `isAuthentic`. There are several APIs available to you. The IDE has intellisense to help you explore your options, but you can also read (yet to be written) docs. Anything you `console.log` will be visible in the Requests table.

![Code editor](/img/hr/ide.png)

#### Requests Table

This interface is inspired by the Network tab in Chrome Dev Tools. It lets you explore the requests your endpoint. There are a couple of notable features.

- You will be able to expand a request and see a diff of the state
- You can see an at-a-glance visual representation of the request body. I use [locality-sensitive hashing](https://en.wikipedia.org/wiki/Locality-sensitive_hashing) and [Jdenticon](https://jdenticon.com/) to make similar payloads appear similar.
- I want to build a custom-columns feature that allows you to surface parts of the request body or state, perhaps using a [jq](https://stedolan.github.io/jq/) expression.

![Requests table](/img/hr/requests-table.png)

### Features

- Set up as many endpoints as you want and map them to reducer functions to retain state
- Queue up inbound traffic to handle spikes. No race conditions internally to HookReducer.
- Easily handle idempotency keys without writing any code
- _Change_ your reducer function and recreate your state with the new code.
- Tag requests?
- Publish state
  - on a websocket
  - to SQS?
  - to another webhook address?
    - Maybe have the option to batch or debounce to that address? Have HookReducer handle the traffic spikes.
  - to Slack?
- Leave at any time: you can export your code to a zip folder that will give you everything you need to run your endpoint on your own. You can also export all your event data
- Create multiple, revokable read and write keys[^1]
- Write keys (endpoints) can map to multiple reducers?

### Pricing & accounts

- You can create an endpoint for free without even making an account
  - If you don't create an account, your data end endpoint will be deleted after some period of time (2h? 2d?)
- With a free account, you can do a lot. Not sure exactly which features I will gate, but I'm looking at making the free tier actually useful, not just a taste of the real experience
- Paid accounts ($5-$50/month... wide range, I know, I'll figure it out later) will offer higher execution limits, more features, isolated runtimes, support, etc. The idea is that if this has really made it into your workflow, and you're seeing lots of traffic, you need to pay for it.

## This solves a non-trivial problem

Webhooks are ubiquitous. Server-server notifications come up any time you're building an internet product. For example, if you're building a SaaS product, you might need a provider like Stripe to send you a webhook any time someone's card is declined because you need to send them an email.

Building an endpoint designed to accept webhooks isn't rocket science. But, there are some gotchas, and doing it well is non-trivial.

### Idempotency

You can't count on a webhook provider to send an event once and only once. If your system receives the same event twice, you might send the customer an email twice.

### Spikes in requests

Sometimes you get unpredictable spikes in traffic from webhook providers. This can be for a variety of reasons[^2]. It's important that when you accept webhooks, you queue incoming requests to be processed asynchronously. That way your webhook doesn't take down production. HookReducer will be built to accept requests at scale and process them later. Everyone goes down, but the architecture is built to minimize downtime of endpoints.

### Authenticity

How do you know if the request your endpoint is receiving is authentic? Anyone who knows the address of your endpoint could hit it. This is a kind of ["monster-in-the-middle attack"](https://en.wikipedia.org/wiki/Man-in-the-middle_attack). Now, you could share a secret with your provider that only they know. But that isn't too different from an obscure URL. The way some services (e.g. Stripe, but many others) handle this is with an authenticity token. The token is often an [HMAC hash](https://en.wikipedia.org/wiki/HMAC) of the payload. If you know a shared secret that the provider shares with you, you can use it to hash the payload and compare it to the authenticity token sent. This isn't _the_ way to authenticate webhooks, it's _a_ way. But, the point is that Hook Reducer will give you the tools you need to authenticate hooks from a variety of sources.

## My goals

My primary goal is to make something people care about. For this to work, it has to pay for it's own hard costs, and if I can make a little money on top for my time, that's great. This is explicitly not a "startup." I don't believe I'll ever raise money, hire employees, launch a marketing campaign. Once feature-complete, I'd like to be able to run this thing with about 4hrs/week (with the exception of new product development). I work fulltime and this isn't intended to replace that.

I also have [a chronic tendency](https://twitter.com/_off_by_one/status/1398056511155310594) to abandon side projects. My hope is that by working in public I'll be able to see this thing to it's natural conclusion!

## What I'm looking for from you

I want to know if people are excited about this? Do I get old friends coming out of the woodwork to tell me they'd use it? People telling me about feature ideas? Crickets? I'm trying to take the pulse of the internet and see how you all feel. Have some advice for me? It is hereby solicited.

[^1]: If you want to remove someone's ability to see the state or change it, for example
[^2]: Examples: their queue got messed up after some downtime and they send you 5 hours of activity all at once, someone bulk updates customer records and they send you a request for each one, etc, etc
