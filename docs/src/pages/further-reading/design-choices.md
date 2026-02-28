---
layout: ../../layouts/Markdown.astro
title: Design Choices
---

# Design Choices

## Progressive Enhancement

**Progressive enhancement** is when a site degrades gracefully if desired features aren't available, giving an alternate user experience instead of breaking. This makes it so that on a basic browser, you get a basic experience, but when more features are available, the user experience is (progressively) enhanced.

I always found the concept to be elegant, and an inherently good idea. Everyone's browsers support different features; aside from differences between Safari, Firefox, and Chrome, some people are visiting from 10 year old phones (and who knows, maybe a smart fridge or two!). This feels like the best strategy for shipping the best user experience to the most amount of people.

Therefore, I try to encourage the use of techniques that achieve this goal, both in my exmaples and in the library itself. For example:

1. The `enhance` script smooths some rough edges, but nothing breaks if it doesn't load (e.g., when a user has JS disabled).
2. I tried not to rely on features that aren't widely available, but made exceptions when I could use them in a way that degraded gracefully.

## Semantic HTML

The newer HTML elements like `dialog` and `details` have multiple benefits: they allow developers to use less JavaScript, they have some accessibility features built in, and they make the HTML easier to read. That last one is arguably less impactful, but it satisfying to curious nerds like myself.

I wanted to encourage the use of these new elements wherever possible, while being pragmatic about allowing the user to override this when necessary. Therefore, the docs recommend semantic elements first, but the CSS is class-based and typically doesn't care about which element it's applied to (with some exceptions).

## Size Units

There seem to be differing opinions on when to use `rem` or `px` for sizes. The difference is that sizes defined in `rem` scale with the user's configured font size, while `px` are static. Therefore, there is a consensus on using `rem` for text (for accessibility reasons). But what about everything else?

**Approach 1**: use `rem` for everything. If you do this, your application essentially scales with the user's font size. If they have it set to `24px` instead of the default `16px`, you essentially start zoomed in at 150%. This works well; nothing breaks, and the app is perfectly legible.

**Approach 2**: use `rem` selectively. This requires you to determine which things should scale and which things should stay the same. For example, text should definitely scale across the UI. But the thickness or roundness of a button's borders don't need to. In this case, you could use `rem` for the former and `px` for the latter.

Advocates for approach 1 will will say that approach 2 is harder to do right (since you can make a wrong decision on what should scale), while advocates for approach 2 will say that approach 1 leads to wasted space (since things that don't need to scale will take up extra space). I ended up going with approach 2, but I'm open to feedback from users who use custom font sizes if things aren't working right.

## Flexible & Future-Proof

Frameworks come and go, but the core web platform is solid with a strong emphasis on not breaking existing code ("don't break the web" is a mantra that seems to be _mostly_ followed). Adding a dependency on React, Angular, or whatever else people were using at the moment could improve ergonomics early on, but would lead to additional maintenence needs and restrictions on how the code can be used. I didn't want to couple myself to any of that.

While Web Components are a potential solution to dependencies and lock-in, I didn't want to force users to use JavaScript or deal with FOUC. Maybe there will come a time when the UX and DX of this technology improves, and I'm open to revisiting this choice if it does.

## Aesthetics

The visual style of a design system is hard to articulate, but here are some of the "vibes" I wanted mine to have:

- Clean, modern, current
- Fun, youthful, unique but not surprising
- Polished but not boring
