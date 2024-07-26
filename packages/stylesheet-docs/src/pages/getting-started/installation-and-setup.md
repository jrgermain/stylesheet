---
layout: ../../layouts/Markdown.astro
title: Installation & Setup
---

# Installation

## Option 1: `import`

This is usually the easier option if your project supports importing CSS files from its dependencies (true for most frameworks).

First, add the stylesheet as a project dependency by running the following command:

```sh
npm install @jrgermain/stylesheet
```

Then, in the entrypoint of your project, add the following import:

```js
import "@jrgermain/stylesheet/index.css";
```

Note that the actual name of the file where you need to add this import statement is going to be framework-dependent. Typically this file will be called something like root, index, or main.

## Option 2: `<link>` tag

Alternatively, you can add a `<link>` tag to your document head that references the stylesheet. You can either copy the CSS files to your project manually, or reference them from a CDN.

```html
<!-- Reference file copied into "styles" directory -->
<link rel="stylesheet" type="text/css" href="/styles/index.css" />

<!-- Reference file from a CDN -->
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/@jrgermain/stylesheet@1.0/dist/index.css"
/>
```

# Customizing

To override aspects of the theme such as the brand color or fonts, simply define CSS Custom Properties ("CSS variables") with the same names as those defined in the stylesheet. The library will pick up the overridden values.

Make sure that you add the overrides after the main stylesheet; otherwise, they won't work.

For a full list of custom properties defined by the library, go to the Tokens page.
