---
layout: ../../layouts/Markdown.astro
title: Skip Link
---

## Skip Link

It's a best practice to add a **Skip to Main Content** link for accessibility reasons. This allows users to easily move focus past the header and navigation elements to the main content of the page, which helps both keyboard users and screen reader users navigate the application more easily.

Add your skip link as the first child of your App Root. You should use the following HTML markup (copied verbatim):

```html
<a class="skip-link" href="#main-content">Skip to Main Content <kbd>↵</kbd></a>
```

Note that the markup above assumes that the container holding the main content of the page has an `id` of `main-content`. If you choose to use a different `id`, make sure to update the `href` of the skip link to match.

Below is a static example of what the skip link looks like:

<span class="skip-link static">Skip to Main Content <kbd>↵</kbd></span>
