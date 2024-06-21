---
title: "Get shit done by warping friction-space"
description: You can change the dynamics of your system and be less frustrated and more effective
date: 2024-05-29
tags:
  - friction
  - engineering
layout: post.njk
previewImage: /img/the-process/friction-space.webp
---

I have a process for making a codebase better over time, and it's so simple it could almost be a tweet:

**Make stuff that should be easy easy. Make stuff that should be hard hard.**

If my brain had telemetry, I think the CPU load while at work would look something like this. Noisy and spiky.

<div class="md:transform md:scale-110 md:-translate-x-1/8 sm:mt-24 sm:mb-12">
    <img class="border p-2 rounded shadow-sm" src="/img/the-process/telemetry.png" />
    <img class="transform -translate-y-8 translate-x-1" src="/img/the-process/friction footer.png" />
</div>

The spikes are part of what people call "friction" at work. Friction isn't _always_ bad, but usually it is. There are a handful of things that you actually want to require extra effort to do. But as a rule it's something we are constantly trying to minimize.

My process starts by doing product engineering. Every time I pick something up, be it exciting or mundane, I take telemetry. When something seems really hard, I bookmark it.

Periodically, I reflect on what's been hard. Here are some made up examples

<div id="mermaid-container" class="bg-white transform transition-all relative">
<div id="highlight" class="absolute transform transitions-all rounded-lg z-75 opacity-0 bg-blue-300 z-50 border-8 border-blue-600" style="width: 232px; height: 213px;"></div>


```mermaid
%%{init: {"themeVariables": {"quadrant1TextFill": "darkgreen", "quadrant3TextFill": "darkyellow", "quadrant4TextFill": "orange", "quadrant2TextFill": "red" } }}%%
quadrantChart
    title Friction Evaluation Matrix
    x-axis Was Easy --> Was Hard
    y-axis Should Have Been Easy --> Should Have Been Hard
    quadrant-1 Awesome work
    quadrant-2 Reckless zone
    quadrant-3 Necessary toil
    quadrant-4 Frustrating bullshit

    Necessary refactoring: [0.45, 0.17]
    Writing tests: [0.1, 0.13]
    Adding a module: [0.7, 0.23]
    Adding a microservice: [0.88, 0.33]

    Architecture project: [0.87, 0.79]
    Building consensus: [0.7, 0.59]
    Adopting new technology: [0.6, 0.69]
    Mentorship: [0.62, 0.8]


    Add another ORM Relation: [0.20, 0.64]
    SQL against prod: [0.15, 0.72]
```

<div class="bg-red-100 border-2 border-red-400 rounded-lg text-red-700 px-3 pb-0 m-3 flex items-start gap-4" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transform translate-y-3.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>


  <div class="text-sm">
    <p class="font-bold">Both axes are subjective</p>

  <p>But, the X-Axis is a qualitative measurement of your experience–what was and was not hard. The Y-Axis is <span class="italic">more</span> subjective. It's your opinion about what should be.</p>
  </div>
</div>
</div>


Later, when I'm doing self-driven work, I try to react to my observations.

## Address The Reckless Zone

If I observe something in The Reckless Zone, it's important to address quickly. For example, if engineers at a small but growing startup are running queries against the main production DB, that's something that needs to be addressed because it could take down the system.

To mitigate observations in The Reckless Zone, we need to _add_ friction. It's important that the friction is automated. I'm talking about linters, PR bots, Slack alerts, etc. We should minimize the extent to which someone needs to _enforce_ stuff.

## Celebrate awesome work

It's important for ICs' work to be _visible_ and celebrated. When folks do good, hard things, the broader team needs to know. Different companies have different mechanisms of this, but usually there's at least a slack channel for celebrating wins. If not, maybe there should be.

## Work on Frustrating Bullshit

Whenever you encounter something that is hard but should be easy, it's important to take a careful look at it. This could be a golden opportunity to improve the broader tech org.

Not everything is easily addressable. Some problems are not technical ones. But this is the quadrant that's holding you back. You need to build a culture that chips away at this unnecessary friction over time, and periodically makes investments that produce big leaps forward.

When teams are "too busy" to make investments in working better, that means they'll be just as "busy" next year. They probably feel chronically overworked and frustrated. Imagining shoveling a huge pile of dirt with a spoon and thinking "there's gotta be a better way," only to be told "nope, don't think about that! too much dirt!"


## The org is a dynamic system

Different people in the organization will have different perspectives on what needs to be hard and what doesn't. It's a big dynamic system. It's hard work to build enough consensus, but it's worth it. When you achieve a well-calibrated friction space, goals are more likely to get met, people are happier, and the company starts to trust that the engineering organization can do what it says.

<div class="bg-gray-800 rounded px-6 shadow-sm md:transform md:scale-150 md:-translate-x-1/8 sm:mt-48 sm:mb-72">
    <img class="p-4" src="/img/the-process/dynamics.png" />
</div>

Let's take a minute to zoom in on a subgraph here...

```mermaid
graph BT
    credibility["Credibility"] -->|++| tech_investments["Tech Investments"]
    linkStyle 0 stroke:green,stroke-width:3px
    tech_investments -.->|----| friction[Friction]
    linkStyle 1 stroke:#f22,stroke-width:7px
    tech_investments -.->|++| friction
    linkStyle 2 stroke:green,stroke-width:3px
    tech_investments -->|++| reliability["Reliability"]
    linkStyle 3 stroke:green,stroke-width:4px
    tech_investments -->|++| security["Security"]
    linkStyle 4 stroke:green,stroke-width:2px
    tech_investments -->|--| capacity["Capacity (gas)"]
    linkStyle 5 stroke:red,stroke-width:2px
    tech_investments -->|+++| cohesion["Conative Cohesion"]
    linkStyle 6 stroke:green,stroke-width:4px
    tech_investments -->|-| surface_area["Surface Area"]
    linkStyle 7 stroke:red,stroke-width:1px
    tech_investments -->|++| mpg["Milage (mpg)"]
    linkStyle 8 stroke:green,stroke-width:2px
    tech_investments -->|++| documentation["Documentation"]
    linkStyle 9 stroke:green,stroke-width:2px

    capacity -->|++| tech_investments
    linkStyle 10 stroke:green,stroke-width:2px

    documentation -->|+| mpg
    linkStyle 11 stroke:green,stroke-width:2px

    reliability -->|++| credibility
    linkStyle 12 stroke:green,stroke-width:2px

    mpg -->|++| credibility
    linkStyle 13 stroke:green,stroke-width:2px

    security -->|++| credibility
    linkStyle 14 stroke:green,stroke-width:2px

    friction -->|----| mpg
    linkStyle 15 stroke:red,stroke-width:5px

```

### Tech Investments

Tech investments take away capacity you could spend elsewhere. These investments add _and_ remove friction, but they take away more than they add. They enhance security, reliability, and conative cohesion. Tech investments (in contrast to product investments), tend to modestly remove surface area (a liability). Tech investments empty your gas tank, but increase your milage.

In order to do tech investments, you need some credibility in the org, but by doing tech investments well, you tend to build credibility, as well.


### Cognitive cohesion

Conative cohesion is a mostly squishy idea that things that belong together are found together. At work, we try to measure this by seeing how many modules need to be modified in a single chunk of work. If for most tasks you can open up a single module, load it into your brain, and ignore the rest of the application, that's a proxy for high cognitive cohesion.

Another way to get a feel for cognitive cohesion: how many people have to be involved to make a seemingly simple change happen? Is it a couple people on a team, or 4 teams coordinating via weekly "scrum of scrum" meetings? At prior company, creating a new promotional discount took a quarter and required constant syncing of more teams than I'd care to admit. That was because the details of discounts were spread out into a web of tiny, brittle micro-services that had **low cognitive cohesion**.

```mermaid
graph BT
    tech_investments[Tech Investments] -->|+++| cohesion["Conative Cohesion"]
    linkStyle 0 stroke:green, stroke-width:4px
    cohesion -->|--| friction
    linkStyle 1 stroke:red, stroke-width:3px
    cohesion -->|+| morale
    linkStyle 2 stroke:green, stroke-width:1px
    cohesion -->|++++| code_reads["Code Read MPG"]
    linkStyle 3 stroke:green, stroke-width:5px
    cohesion -->|++| code_writes["Code Writes MPG"]
    linkStyle 4 stroke:green, stroke-width:2px
    documentation -->|+| cohesion
    linkStyle 5 stroke:green, stroke-width:1px
```

## Velocity

It's tempting to think of product investment and tech investment as zero-sum. An hour spent on one is an hour not spent on the other. But friction (in the wrong places) has a profound drag on product velocity.

On the other side of the coin, it's not really possible for engineers to achieve business outcomes with tech investments alone.

```mermaid
graph BT
    friction -->|---| velocity["Product Investment (m/s^2)"]
    linkStyle 0 stroke:#f22, stroke-width:3px
    velocity -->|+++| outcomes
    linkStyle 1 stroke:green, stroke-width:5px
    capacity -->|++| velocity
    linkStyle 2 stroke:green, stroke-width:3px
    reliability -->|+| velocity
    linkStyle 3 stroke:green, stroke-width:1px
```


## Changing friction space

The real task of senior-level ICs is to continuously (and strategically) mold the friction space in response to the needs of the business. The reason why this is continuous is because the needs of the business are in constant flux. A well-calibrated friction space for a scrappy 10 person engineering organization will be totally dysfunctional for a 20 or 200 person org.

I'm not a big fan of dedicated teams that are charged with reducing friction. It can be the right move, but these teams tend to lose touch with the reality of the friction space and work off of their mental model of the friction space which drifts away from reality. Instead I'm in favor of empowering every engineer to work on the friction space. If there is a dedicated team, it's important for them to have good feedback mechanisms. This could take the shape of pair programming with "product engineering" or rotating onto teams for a quarter per year.



<img class="rounded-lg shadow border" src="/img/the-process/friction-space.webp" />

If you're company hasn't learned how to manage it's friction space yet, work on it. Things will only get more painful until you figure out how to manage friction as part of development.


<script>

function isDesktop() {
    const viewportWidth = window.innerWidth;
    return viewportWidth > 1024;
}

const matrix = {
  stickyClasses: ['sticky', 'border', 'shadow-lg', 'rounded-xl', 'border', 'top-0', 'scale-50', '-translate-y-24', 'translate-x-full', 'mr-36', 'rotate-1', 'skew-1',

  
  ],
  
  isStuck() {
    return document.querySelector('#mermaid-container').classList.contains('sticky')
  },
  
  stick() {
    document.querySelector('#mermaid-container').classList.add(...matrix.stickyClasses)
  },
  
  unstick() {
    document.querySelector('#mermaid-container').classList.remove(...matrix.stickyClasses)
    matrix.removeHighlight();
  },

  hide() {
    document.querySelector('#mermaid-container').classList.add("opacity-0")
  },

  show() {
    document.querySelector('#mermaid-container').classList.remove("opacity-0")
  },

  getQuadrantCoordinates(index) {
    const container = document.querySelector('#mermaid-container');
    const quad = document.querySelectorAll('#mermaid-container .quadrant')[index]

    const parentRect = container.getBoundingClientRect();
    const elementRect = quad.getBoundingClientRect();

    return {
        top: elementRect.top - parentRect.top - 3,
        right: parentRect.right - elementRect.right,
        bottom: parentRect.bottom - elementRect.bottom,
        left: elementRect.left - parentRect.left - 1
    };
    return delta
  },

  highlight(index) {
    if (!matrix.isStuck()) { return; }
    matrix.highlighted = index;
    const coords = matrix.getQuadrantCoordinates(index);
    const highlight = document.querySelector('#mermaid-container #highlight');
    highlight.classList.remove('opacity-0');
    highlight.classList.add('opacity-25');

    highlight.style.transform = `translate(${coords.left * 2}px, ${coords.top * 2}px)`;
  },

  removeHighlight() {
    matrix.highlighted = null;
    const highlight = document.querySelector('#mermaid-container #highlight');
    highlight.classList.add('opacity-0');
    highlight.classList.remove('opacity-25');
  },

  currentHighlight() {
    return matrix.highlighted;
  },
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Debounce function to limit the rate at which a function is executed
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function trackScrollingFor(selectors, callback) {
  const elements = selectors.map(selector => ({
    selector: selector,
    element: document.querySelector(selector)
  }));
  let lastScrollY = window.scrollY;
  let direction = 'none';

  const getScrollPositions = () => {
    const positions = {};
    elements.forEach(({selector, element}) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        positions[selector] = rect.top;
      } else {
        console.warn(`Element for selector "${selector}" not found.`);
      }
    });
    return positions;
  };

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      direction = 'down';
    } else if (currentScrollY < lastScrollY) {
      direction = 'up';
    } else {
      direction = 'none';
    }
    lastScrollY = currentScrollY;

    const positions = getScrollPositions();
    callback(positions, direction);
  }, 100);

  window.addEventListener('scroll', handleScroll);

  // Initial call to provide positions at load time
  handleScroll();
}

const selectors = [
  '.mermaid',
  '#the-org-is-a-dynamic-system',
  '#address-the-reckless-zone',
  '#celebrate-awesome-work',
  '#work-on-frustrating-bullshit'
];

trackScrollingFor(selectors, (positions, direction) => {

  if (!isDesktop()) {
    return;
  }

  if (positions['.mermaid'] < 15 && direction === 'down') {
    matrix.stick();
  }

  if (positions['#the-org-is-a-dynamic-system'] < window.innerHeight * 0.33 && direction === 'down') {
    matrix.hide();
  }

  if (positions['#the-org-is-a-dynamic-system'] > window.innerHeight * 0.33 && direction === 'up') {
    matrix.show();
  }

  if (positions['#address-the-reckless-zone'] > window.innerHeight / 2 && matrix.isStuck() && direction === 'up') {
    matrix.unstick();
  }

  if (positions['#address-the-reckless-zone'] < 220 && direction === 'down') {
    matrix.highlight(1)
  }

  if (positions['#celebrate-awesome-work'] < 220 && direction === 'down') {
    matrix.highlight(0)
  }

  if (positions['#work-on-frustrating-bullshit'] < 220 && direction === 'down') {
    matrix.highlight(3)
  }




  if (matrix.currentHighlight() === 0 && positions['#address-the-reckless-zone'] > -100 && direction === 'up') {
    matrix.highlight(1)
  }

  if (matrix.currentHighlight() === 3 && positions['#celebrate-awesome-work'] > -100 && direction === 'up') {
    matrix.highlight(0)
  }


});







// Function to run when the element is about to scroll out of view at the top
// function handleIntersection(entries) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
//             document.querySelector('#mermaid-container').classList.add('sticky', 'border', 'shadow-lg', 'rounded-xl', 'border', 'top-0', 'scale-50', '-translate-y-24', '-translate-x-full', 'ml-24', '-rotate-1', 'skew-1')
//         }
//     });
// }

// // Options for the Intersection Observer
// let options = {
//     root: null, // observing intersections relative to the viewport
//     rootMargin: '0px',
//     threshold: 1
// };

// // Creating an observer with the function and options
// let observer = new IntersectionObserver(handleIntersection, options);

// // Target element to observe
// let targetElement = document.querySelector('.mermaid');

// // Start observing the target
// observer.observe(targetElement);
</script>
