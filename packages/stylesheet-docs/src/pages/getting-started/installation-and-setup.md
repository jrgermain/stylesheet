---
layout: ../../layouts/Markdown.astro
title: Installation & Setup
---

# Installation & Setup

## Installing the Stylesheet

There are multiple ways to add the stylesheet to your project. The most common setups are outlined below.

### Option 1: `import`

First, install `@jrgermain/stylesheet` as a dependency. For example, if you're using NPM, you'd run the following command:

```sh
npm install @jrgermain/stylesheet
```

Then, in the entrypoint of your project (typically a file named root, index, or main), add the following import statement:

```js
import "@jrgermain/stylesheet";
```

If you get a compilation error, you can try the following equivalent import statement:

```js
import "@jrgermain/stylesheet/index.css";
```

#### Framework-specific Notes

<div class="accordion">
<details>
<summary>Astro</summary>

You'll also need to add the following to your Astro config to ensure that the CSS loaded by the stylesheet package is processed correctly:

```js
{
  vite: {
    ssr: {
      noExternal: ["@jrgermain/stylesheet"],
    },
  },
}
```

</details>
</div>

### Option 2: `<link>` Tags

Alternatively, you can add a `<link>` tag to your document head with a `href` that references the stylesheet.

You can either copy the CSS files (`index.min.css` and optionally `index.min.css.map`) into your public directory and reference the local copy **or** link to a CDN.

```html
<!-- Use stylesheet that was copied into $PUBLIC_DIR/styles -->
<link rel="stylesheet" type="text/css" href="/styles/index.min.css" />
```

<br/>

```html
<!-- Pull version 0.3.0 of stylesheet from a CDN -->
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/@jrgermain/stylesheet@0.3.0"
/>
```

## Setup

### Recommended `head` Elements

It's recommended to set the `theme-color` meta tag. To do this, copy the following into your document `head`:

```html
<meta name="theme-color" content="#fff" />
<meta
  name="theme-color"
  media="(prefers-color-scheme: dark)"
  content="oklch(8% 2% 263deg)"
/>
```

### Customizing

To override aspects of the theme such as the brand color or fonts, simply define CSS Custom Properties ("CSS variables") with the same names as those defined in the stylesheet. The library will pick up the overridden values.

Make sure that you add the overrides after the main stylesheet; otherwise, they won't work.

For a full list of custom properties defined by the library, go to the Tokens page.
