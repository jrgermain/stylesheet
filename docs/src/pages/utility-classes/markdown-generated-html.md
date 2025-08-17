---
layout: ../../layouts/Markdown.astro
title: Markdown/Generated HTML
---

# Markdown/Generated HTML

There are times when you may want to embed HTML that was generated from some other format, like Markdown.
In these cases, you can add the class `style-semantic-elements` to the element holding the generated HTML.
This will apply default styles to the generated HTML elements, such as headings, paragraphs, and lists,
without needing to add the classes manually.

These styles are given a lower priority than the other styles in the stylesheet, so any classes you add
to the elements inside the Markdown should work as expected.

The table below shows the mappings between different element types and the classes they will appear to have:

| Element         | Styled Like          |
| --------------- | -------------------- |
| `hr`            | `.divider`           |
| `br`            | `.divider.invisible` |
| `h1`            | `.heading-1`         |
| `h2`            | `.heading-2`         |
| `h3`            | `.heading-3`         |
| `h4`            | `.heading-4`         |
| `h5`            | `.heading-5`         |
| `h6`            | `.heading-6`         |
| `mark`          | `.highlight`         |
| `del`           | `.highlight.removed` |
| `ins`           | `.highlight.added`   |
| `a`             | `.link`              |
| `blockquote`    | `.quote`             |
| `table`         | `.table`             |
| `ol` or `ul`    | `.list`             |
| `p`             | `.paragraph`         |
| `abbr`          | `.abbreviation`      |
| `strong` or `b` | `.bold`              |
| `em`            | `.italic`            |
| `s`             | `.strikethrough`     |
| `sub`           | `.subscript`         |
| `sup`           | `.superscript`       |
| `code`          | `.code`              |
| `kbd`           | `.key`               |
