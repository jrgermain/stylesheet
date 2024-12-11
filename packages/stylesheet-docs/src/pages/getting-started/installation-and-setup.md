---
layout: ../../layouts/Markdown.astro
title: Installation & Setup
---

# Installation

## Option 1: `import`

This is usually the easier option if your project supports importing CSS files from its dependencies (true for most frameworks).

First, add the stylesheet and fonts as dependencies by running the following command:

```sh
npm install @jrgermain/stylesheet @fontsource-variable/lexend @fontsource-variable/manrope @fontsource-variable/source-code-pro
```

Then, in the entrypoint of your project, add the following imports:

```js
import "@jrgermain/stylesheet/index.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/lexend";
import "@fontsource-variable/source-code-pro";
```

Note that the actual name of the file where you need to add these import statements is going to be framework-dependent. Typically this file will be called something like root, index, or main.

## Option 2: `<link>` tag

Alternatively, you can add a `<link>` tag to your document head with a `href` that references the stylesheet.

You can either copy the CSS files (`index.min.css` and `index.min.css.map`) into your public directory and reference the local copy **or** link to a CDN.

```html
<!-- Use stylesheet that was copied into $PUBLIC_DIR/styles -->
<link rel="stylesheet" type="text/css" href="/styles/index.min.css" />
```

```html
<!-- Pull version 0.2.0 of stylesheet from a CDN -->
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/@jrgermain/stylesheet@0.2.0/dist/index.css"
/>
```

You'll also need to add the **Lexend Variable**, **Manrope Variable**, and **Source Code Pro Variable** fonts, either by making local copies or using a CDN. If you're stuck, [Fontsource](https://fontsource.org) can help you download or get CDN links for these fonts.

# Customizing

To override aspects of the theme such as the brand color or fonts, simply define CSS Custom Properties ("CSS variables") with the same names as those defined in the stylesheet. The library will pick up the overridden values.

Make sure that you add the overrides after the main stylesheet; otherwise, they won't work.

For a full list of custom properties defined by the library, go to the Tokens page.
