---
title: Cost of computing
description: Why isn't it getting cheaper and cheaper to write programs
date: 2021-10-29
tags:
  - stem
  - programming
layout: post.njk
previewImage: /img/early-computer.jpg
---

We accept that the costs of things change throughout history, but the sheer magnitude of that change can be staggering when you step back and contemplate it.

For example, the light we emit in our homes on any given night would have cost a small fortune (in today's money!) 700 years ago.

<iframe src="https://ourworldindata.org/grapher/the-price-for-lighting-per-million-lumen-hours-in-the-uk-in-british-pound?yScale=log&time=1301..latest" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

Moore's law is another example of radical price changes.

https://twitter.com/weird_hist/status/1359921151951200256?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed&ref_url=notion%3A%2F%2Fwww.notion.so%2Fzekenie%2FMy-own-history-with-classrooms-computation-6416d8938c66429b82cdc7a92308e53f

Another example is solar energy prices (note the log scale!).

<img src="https://ourworldindata.org/uploads/2020/11/solar-pv-prices-vs-cumulative-capacity.png"/>

**What about the cost of writing programs?**

Admittedly, I'm probably not the right person to answer this question. I think this is a question at the intersection of software engineering and economics. I know a great deal about one, and not the other. I'm sure someone's had this thought before, but I can't find a lot on the topic.

Historically, I know that writing programs used to be more expensive. There was a time when you wrote programs on punch cards. There was a time when you wrote programs in Assembly.

<div class="video-wrapper">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/8pTEmbeENF4?start=269" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

In my own experience writing software over the last couple decades, the cost of writing programs has been stagnant. Some things have gotten easier, and some things harder, but these changes have been marginal. Dependency management is much easier than it used to be. So is virtualization. Linux containers make you feel confident that your system mirrors production. But, on the other hand, we didn't have [elaborate](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) frontend systems in 2003 or [complex container orchestration](https://circleci.com/blog/its-the-future/). This is all beside the point, though. The point is any change in the cost of writing programs is marginal, and has been eaten up by the larger and larger demands of new programs.

What would a radical departure in the cost of writing programs look like? Spreadsheets.

<div class="grid gap-2 grid-cols-1 sm:grid-cols-3">
  <div>
    <img class="object-cover h-40" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Visicalc.png"/>
    <div class="text-sm text-gray-600">Visicalc</div>
  </div>
  <div>
    <img class="object-cover h-40" src="https://upload.wikimedia.org/wikipedia/en/e/ec/Lotus-123-3.0-dos.png"/>
    <div class="text-sm text-gray-600">Lotus 123</div>
  </div>
  <div>
    <img class="object-cover h-40" src="https://upload.wikimedia.org/wikipedia/en/2/2d/Screenshot_of_Microsoft_Office_Excel_95%2C_an_application_part_of_Microsoft_Office_system.png"/>
    <div class="text-sm text-gray-600">Excel</div>
  </div>
</div>

Spreadsheets let you construct elaborate models. They're not text files, they're dynamic programs. They're not exactly easy to learn, but they're vastly more accessible than pretty much any other programming language. I'm not aware of any programming environment since Spreadsheets that have fundamentally altered the cost of composing programs, at least none that have enjoyed widespread adoption.

What could it mean for society if programs were radically cheaper to create?

Again Victor does an incredible job here. It's about an hour long, I'd encourage you to watch it if you have time.

<iframe src="https://player.vimeo.com/video/115154289?h=f7d38726fe&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/115154289">The Humane Representation of Thought</a> from <a href="https://vimeo.com/worrydream">Bret Victor</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

If programmers were radically cheaper, all sorts of thought work would be faster and better and more accessible. We'd have better doctors, buildings, climate solutions, laws, movies, airplanes, pillowcases, etc.

The impact of future innovation can be hard to imagine. I'll borrow some examples from Victor if you didn't have time to watch. To illustrate the magnitude, we only have to look at the past.

There was a time, in the not too distant past, when the plot had not been invented. Data was represented in tables like this.

<img class="sm:w-1/3" src="/img/cost-of-computing/playfair-table.png"/>

Then, [William Playfair](https://en.wikipedia.org/wiki/William_Playfair) invented a visual representation of the same information.

<img class="sm:w-1/2" src="/img/cost-of-computing/playfair-plot.png"/>

Can you imagine contemplating recessions, COVID numbers, or the climate crisis without Playfair's plot?

This is what a _leap_ forward looks like. And it can happen for programming too. We can have programs that are radically simpler to read and write.

**To make this happen, focus on the ambitious learner**

In order to make programming cheaper, we need to focus on novices. Professionals have too many assumptions about what programming is. We need to focus on people who have no existing notions of data structures, code, or debugging.

The feedback loop is simple. Take a group of smart people, and teach them how to make programs. The goal should be to get them to "bicycle of the mind status," meaning that they can support themselves and let the computer take them wherever their mind wants to go.

<img src="/img/cost-of-computing/feedback-loop.png"/>

This process will undoubtedly have hiccups. Write these down. Focus on these. Retool the curriculum, and take another batch of students. Rinse and repeat.

Don't worry about teaching these students the latest technologies that everyone is using. Don't worry about giving them conventional wisdom. The point is to diverge from conventional wisdom.

Don't be afraid to take on projects that seem very ambitious. Write better programming languages. Write better standard libraries. Write better IDEs. But, optimize them for the learner.

(Note: Making programs cheaper ≠ making programmers cheaper.
They're related, but different concepts. But, we can use the learning process as a sort of "debugger" for the entire concept of programming. It can illuminate the rough parts.)
