---
layout: ../../layouts/Markdown.astro
title: Markdown Output
---

# Markdown Output

You can add the class `markdown-output` to a container to automatically style everything inside it without the classes defined in this library. This is helpful when working with HTML that was rendered from some other format, like Markdown.

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
| `p`             | `.paragraph`         |
| `abbr`          | `.abbreviation`      |
| `strong` or `b` | `.bold`              |
| `em`            | `.italic`            |
| `s`             | `.strikethrough`     |
| `small`         | `.small-text`        |
| `sub`           | `.subscript`         |
| `sup`           | `.superscript`       |
| `code`          | `.code`              |
| `kbd`           | `.key`               |
