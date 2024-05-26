---
title: Have a ball of mud? You need(ed) a map.
description: Reflections on refactoring a big ol' monolith
date: 2024-02-18
tags:
  - programming
  - gen-ai
  - modularity
  - diagrams
  - design
layout: post.njk
previewImage: /img/mud/nyc.jpg
---

At work right now we’re currently working on modularizing our ~15 year old rails codebase. One conversation topic comes up frequently: is there ideal size range for a module? Should we make many small modules that are precise, or fewer course grained modules (or a mixture)? Should we have multiple tiers of nested modules?

Maybe we should take some design inspiration from “the city”. 

Cities are big and complex! Despite this, people seem to get by pretty well in cities. We have tools to manage the level of complexity in our daily lives. Cities are continuously being constructed, just like software by a team that never stops rolling over. The people who started it aren’t around anymore to say why every little thing is just the way it is. Cities are flawed and cities are beautiful.

How do people wrangle the complexity of a city at a practical level? For one, we have maps. Millions of tourists visit New York City every year from all over the world. By and large, they manage to use the subway because of its [incredible map](https://en.wikipedia.org/wiki/New_York_City_Subway_map). The map over-simplifies here and there, and makes some compromises. But, at its core, it achieves its purpose. It’s navigable by a tourist, with some effort.

![New York City Subway Map](/img/mud/nyc.jpg)

If the people building your software are struggling to navigate when they onboard, or perform day to day tasks, chances are you need a map. There’s a bit of a catch-22, as well: if you’ve been building software without a map for 15 years, you haven’t had the tools to design well, so your first map might look like a ball of mud.

![Big ball of mud](/img/mud/mud.webp)

This brings us back to the question at the top. When we’re refactoring a ball of mud, how big should we be chunking? Let’s look to the city.

A single module should have the same level of complexity as a home or even apartment building would. It shouldn’t need a map to understand. Maybe there’s a blueprint from when it was built? But not a map for every day use. Even if a module has some design warts and compromises, you shouldn’t need a map to explain it.

A set of modules representing an entire domain are sort of like a neighborhood. A neighborhood could have a map, especially for people who aren’t very familiar with the geography. But it shouldn’t be an essential tool for people who live and work there. They should be able to go off of memory for the most part.

All big cities have maps. They wouldn’t function without them. Can you imagine what NYC would look like if millions of tourists descended *without* maps?

Codebases that don’t have maps over time tend to function like cities without maps. No one can agree were the borders of anything are. You can’t communicate your future plans relative to anything so people’s intentions are always colliding. If you try to turn to graph force diagrams, it just looks like a big ball of mud. I think that’s what we call a chronic condition… It’s manageable, it can improve, but it’s not really ever going to go away as a problem. 

Why can’t the map be the territory? What if our programming medium was inherently mappable. I’m not saying we’d write code in a visual medium, per se, or that we’ll be opening up our IDEs in VR. But I’m proposing that instead of first using the file system as a way to navigate code, we used some kind of purpose-built map.

If the mapping tools were good enough, that engineers started to rely on it to make better decisions.

Last week at work I was asked to spec out a greenfield project. I used [D2Lang](https://d2lang.com/), as I’ve been known to do of late. I can’t show you the real diagram but it only looked slightly more complicated than this

![D2 Diagram](/img/mud/diagram.png)

In d2, you can produce this image with the following code:

```
http: {
  users: {
    sign_up
  }

  tasks: {
    create
    assign
    complete
    defer
  }
}

# creates a user
http.users.sign_up -> users

# ...
http.tasks.* -> tasks

tasks: {
  shape: sql_table
  id: int {constraint: primary_key}
  last_updated: timestamp with time zone
  assignee_id: int {constraint: foreign_key}
  state: string
}

users: {
  shape: sql_table
  id: int {constraint: primary_key}
  name: timestamp with time zone
  email: int {constraint: foreign_key}
}

tasks -> users
```

Then an idea hit me. What if I had a program in my `$PATH` that could run this as code.

```bash
$ magic-cli ./prototype.d2 --output deno
```

It could clearly build a sqlite database from those sql tables. With some descriptive comments a garden variety gen-ai model could write some prototype code (and even some tests) for individual nodes.

When you want to make big architectural changes, you don’t try to mutate the existing code into the new shape, you instead start over at the map to make a design decision about the intended change. Sure, a bunch of glue code will get wiped away with , and the new code will need to be extensively tested. But, because the map has been automatically updated with every manual change, you’re not starting frame square 1.

Essentially, you’d “GPU compile” down this D2 + english comments + prompt into a nice little Deno binary with a little human in the loop to make sure it does what it’s supposed to.

I am actually [interested in hacking on this](https://github.com/terrastruct/d2/issues/1841), but I think its a long way off from anything you can use. But, if you’re interested in working on it with me, let me know!