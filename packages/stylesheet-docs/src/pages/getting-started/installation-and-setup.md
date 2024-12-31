---
layout: ../../layouts/Markdown.astro
title: Installation & Setup
---

# Installation

There are 2 ways to install the stylesheet. The first is to rely on your package manager and framework to make things easier. The second is a more manual way that will work anywhere.

## Option 1: `import`

This is usually the easier option if you're using a package manager.

First, add the stylesheet as a dependency. For example, if you're using NPM, you'd run the following command:

```sh
npm install @jrgermain/stylesheet
```

Then, in the entrypoint of your project, add the following import statement:

```js
import "@jrgermain/stylesheet";
```

Note that the actual name of the file where you need to add these import statements is going to be framework-dependent. Typically this file will be called something like root, index, or main.

### Framework-specific Notes

<details>
<summary>Astro</summary>

You'll also need to add this to your Astro config to ensure that the CSS loaded by the stylesheet package is processed correctly:

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

## Option 2: `<link>` Tags

Alternatively, you can add a `<link>` tag to your document head with a `href` that references the stylesheet.

You can either copy the CSS files (`index.min.css` and optionally `index.min.css.map`) into your public directory and reference the local copy **or** link to a CDN.

```html
<!-- Use stylesheet that was copied into $PUBLIC_DIR/styles -->
<link rel="stylesheet" type="text/css" href="/styles/index.min.css" />
```

```html
<!-- Pull version 0.2.0 of stylesheet from a CDN -->
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/@jrgermain/stylesheet@0.2.0"
/>
```

You'll also need to add the **Lexend Variable**, **Manrope Variable**, and **Source Code Pro Variable** fonts. Similarly to the stylesheet, you have the option of self-hosting or using a CDN. [Fontsource](https://fontsource.org) has all 3 fonts available for download (if doing the former) and instructions on how to get them from their CDN (if doing the latter).

# Customizing

To override aspects of the theme such as the brand color or fonts, simply define CSS Custom Properties ("CSS variables") with the same names as those defined in the stylesheet. The library will pick up the overridden values.

Make sure that you add the overrides after the main stylesheet; otherwise, they won't work.

For a full list of custom properties defined by the library, go to the Tokens page.
