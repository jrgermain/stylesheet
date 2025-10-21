---
layout: ../../layouts/Markdown.astro
title: Simulating States
---

# Simulating States

Interactive components typically change their appearance when they are hovered, focused, and/or
active (clicked/tapped). This is typically done using the CSS pseudo-classes `:hover`, `:focus`
(or `:focus-visible`), and `:active`, respectively.

If you want to style a component to look like it's in one of these states (without actually _being_
in that state), you can use the utility classes, `.hover`, `.focus`, and `.active`, respectively.

## Hover

The `hover` class corresponds to the `:hover` pseudo-class.

<button class="button">I'm a normal button</button>
<button class="button hover">I look hovered</button>

## Focus

The `focus` class corresponds to either `:focus`, `:focus-visible`, or `:focus-within`, depending
on the component. In any case, it will correspond with the state in which the component would
normally appear focused.

<button class="button">I'm a normal button</button>
<button class="button focus">I look focused</button>

## Active

The `active` class corresponds to the `:active` pseudo-class.

<button class="button">I'm a normal button</button>
<button class="button active">I look active (pressed)</button>

## Combining Multiple States

You can combine these to achieve the desired effect. For example, a button being clicked is usually both active and hovered.

<button class="button">I'm a normal button</button>
<button class="button active hover">I look like I'm being clicked</button>
