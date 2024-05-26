---
title: Why is Excalidraw so fucking good?
description: The product factors that make it work so so well
date: 2021-11-04
tags:
  - thinking-tools
  - product
  - diagrams
layout: post.njk
previewImage: /img/excalidraw/cover.png
---

_Disclaimer: This may read like an ad. It's not. No one's paying me to say this, I just love this product._

[Excalidraw](https://excalidraw.com). Is. So. Good.

Why? When you first open it, it looks kind of sloppy. It almost evokes [Kidpix](https://en.wikipedia.org/wiki/Kid_Pix), or something. Let's dig into what makes it 👨‍🍳💋 from a product perspective.

My threshold for trying new products is comically low. I'll try anything once. But, usually that's where it ends. I don't pride myself on being picky, it's just that most things don't find their way into my workflow.

![Tool bar](/img/excalidraw/distributions.png)

Once I picked up Excalidraw, I haven't put it down. It became my tool-of-choice for diagrams, wireframes, brainstorms, and more. Part of why it was such a good fit for me is that it filled a massive hole in my toolkit. Before the pandemic, I would frequently sketch on whiteboards with my coworkers. In high school, I had a small classroom-sized whiteboard in my bedroom. The pandemic hit me like a ton of bricks in all sorts of ways. At work, one of the hardest parts was losing the white board. Of course, I could get a personal whiteboard, but then I wouldn't be able to really use it for _work_.

So what is it about this software? Why does it work so well?

## You're in

There's no onboarding. No signup. No confirmation email. No OAuth. You're just in the product. Are there any flashy overlay tours with annoying animations and pulsing buttons? Is there a modal upselling you on a paid plan[^1]? No. You're just in product, able to use it.

![Screenshot](/img/excalidraw/landing.png)

## You already know how to use it.

It's not overwhelming. There are 9 tools. The icons tell you what they do. There are no new concepts. If you don't know what something is, you can learn it in about 12 seconds.

![Tool bar](/img/excalidraw/tools.png)

Other tools offer quite a bit more power, but require an investment to learn. I've often wanted to try Omnigraffle after seeing what [Gabe Lebec](https://twitter.com/g_lebec) could make with it when we worked together. But, every time I've tried it, I've been overwhelmed by the learning curve (not to mention the dollar curve).

I would resort to making diagrams in Keynote, HTML/CSS (just because I know it), Graphviz, or pen and paper.

## Low fidelity

![Example diagram](/img/excalidraw/diagrams.png)

It forces you to stay low fidelity. Because everything is rendered with [rough.js](https://roughjs.com/) (I think...), objects look sloppy and hand-drawn. This liberates you from the details and lets you get to the point. In a proper design tool, an incomplete thought would feel discouraging. The product would beg for polish. In Excalidraw, polish is illegal, allowing you to stay in idea-space.

## Intuitive nod to pro tools

It respects standards. I've spent a lot of time learning keyboard commands for other software (Keynote, InDesign, etc), and when I reflexively use them in Excalidraw... they work[^2]! `Cmd + option + g` creates a group, `Cmd + option + shift + g` removes a group! You can hold down the space bar and drag the screen around. Too see what's possible, hit the question mark in the lower right corner.

![Help screenshot](/img/excalidraw/help.png)

I'm personally not a dark-mode person[^3], but some people actually won't use an app unless it looks like the dark side of the moon. Here's a diagram I [recently](/posts/operations) made, rendered in dark mode.

<img class="rounded-xl shadow" src="/img/excalidraw/dark-mode.png"/>

## Semantically oriented

You can build a vocabulary of objects. If you're using combinations of shapes to symbolize something, you can add them to your library of shapes, and recreate them when you need them. This is something I've wanted in Keynote for a long time.

![Library screenshot](/img/excalidraw/library.png)

## Collaborative with zero friction

You don't have to be an Excalidraw evangelist to collaborate. Just send a link to your coworker. They don't have to sign up. They don't have to worry that a SaaS company will spam them for the rest of their life. They just click the link, and collaborate.

![Collaboration screenshot](/img/excalidraw/collaboration.png)

## The takeaway

If you're building a tool and you want your users to love you and to tell their friends:

1. Reduce friction to zero
2. Make. It. Simple.
3. Don't upsell (or if you do, do it tastefully)
4. Let users collaborate just as easily
5. Build around users' intuition
6. Small building blocks can be pretty mighty.

## Misc

https://twitter.com/_off_by_one/status/1362971962222534658

https://twitter.com/_off_by_one/status/1386405045684498432

[^1]: They have recently taken a tiny piece of screen real estate to sell a paid plan, which is kind of annoying, have to say. But I guess they're a business? At least it's not too disruptive.
[^2]: 10 years ago, one of the things I _loved_ about jQuery was how guessable the API was. I remember being able to work on a jQuery app on an airplane (when airplanes didn't have internet) because I didn't really have to look at the docs too much, I'd just guess the function signatures. Sign of a great design.
[^3]: I decided against adding a dark mode to this site, sorry dark-mode stans.
