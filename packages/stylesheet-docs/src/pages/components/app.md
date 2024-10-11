---
layout: ../../layouts/Markdown.astro
title: App
---

# App

The `App` component is really a _collection of related components_ that, together, form the global layout of the page. They define the style and size of the global header, main content, and optional sidebar areas.

2 main layouts are supported: **standard** and **sidebar**. The app will use the standard layout by default, and will automatically switch to the sidebar layout if the page has a sidebar on it. (As an example, this site uses the sidebar layout).

## App Root

The root element of your app should have the class `app`. The rest of your application will go inside this container.

```html
<html>
  <head>
    ...
  </head>
  <body class="app">
    ...
  </body>
</html>
```

Another valid option (e.g., for a react SPA) would be something like this:

````html
```html
<html>
  <head>
    ...
  </head>
  <body>
    <div id="root" class="app">...</div>
  </body>
</html>
````

## App Header

Most apps will have a header. The header should be an immediate child of the App Root.

The header will always have the following structure:

```html
<header class="app-header">
  <div class="app-header-content">
    <!-- 0 or more of the following: -->
    <div class="app-header-section">
      <!-- 0 or more of the following: -->
      <div class="app-header-item"></div>
    </div>
  </div>
</header>
```

Note that, up to this point, the tag names can vary, but you should stick to the classnames used above.

If you have a sidebar, you'll also want to add a toggle button to the final header section. This allows the user to show/hide the sidebar when the screen isn't wide enough to keep it visible. The toggle will automatically disappear once the screen is wide enough.

```html
<label class="app-header-item app-sidebar-toggle">
  <input type="checkbox" title="Toggle navigation" />
  <div></div>
  <div></div>
  <div></div>
</label>
```

Unlike the other code samples here, both the tag names _and_ class names for the toggle button should be copied verbatim.

## App Body

All apps should have a body. Note that this is different from the document `body` tag; the App Body represents the main content area of your application (i.e., the part after the header). The body should be an immediate child of the App Root.

The body will always have the following structure:

```html
<div class="app-body">
  <!-- Optional -->
  <nav class="app-sidebar">...</nav>
  <!-- Required; id is needed if you're using the Skip to Main link component -->
  <main id="main-content" class="app-content">...</main>
</div>
```

As with the header, the tag names can vary, but you should stick to the classnames used above.

## App Sidebar

Apps with many navigation items or a complicated hierarchy can use a sidebar to de-clutter the header area.

If you choose to use a sidebar, it should be an immediate child of the App Body.

The sidebar will always have the following structure:

```html
<nav class="app-sidebar">
  <!-- One or more of the following -->
  <section class="app-sidebar-section">
    <h1 class="app-sidebar-heading">Heading</h1>
    <a class="app-sidebar-item" aria-current="page">Current Page</a>
    <a class="app-sidebar-item">Other Page</a>
  </section>
</nav>
```

Note that the tag names can vary, but you should stick to the classnames used above.

## Skip to Main Link

It's a best practice to add a **Skip to Main Content** link for accessibility reasons; this allows users to easily move focus past the header and navigation elements and to the main content of the page, which helps both keyboard users and screen reader users navigate the application more easily.

Add your skip link as the first child of your App Root. You should use the following HTML markup (copied verbatim):

```html
<a class="skip-link" href="#main-content">Skip to Main Content <kbd>↵</kbd></a>
```
