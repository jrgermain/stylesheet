export type Category = {
  title: string;
  description: string;
  slug: string;
  sections: Section[];
};

export type Section = {
  title: string;
  description: string;
  slug: string;
  pages: Page[];
};

export type Page = {
  title: string;
  slug: string;
};

export const navCategories: Category[] = [
  {
    title: "Info",
    description:
      "Learn about the stylesheet and how to use it in your next project.",
    slug: "info",
    sections: [
      {
        title: "Getting Started",
        description: "Learn how to set up your project to use the stylesheet.",
        slug: "getting-started",
        pages: [
          { title: "Introduction", slug: "introduction" },
          { title: "Installation & Setup", slug: "installation-and-setup" },
          { title: "Customization", slug: "customization" },
          { title: "Next Steps", slug: "next-steps" },
        ],
      },
      {
        title: "Further Reading",
        description: "Additional information about the project.",
        slug: "further-reading",
        pages: [
          { title: "Design Choices", slug: "design-choices" },
          { title: "Inspiration", slug: "inspiration" },
        ],
      },
    ],
  },
  {
    title: "Components",
    description:
      "Browse the component library and see examples of how to use and configure each component.",
    slug: "components",
    sections: [
      {
        title: "Layout",
        description: "Components that organize other content on the page.",
        slug: "layout",
        pages: [
          { title: "Accordion", slug: "accordion" },
          { title: "Card", slug: "card" },
          { title: "Divider", slug: "divider" },
          { title: "Drawer", slug: "drawer" },
          { title: "Fieldset", slug: "fieldset" },
          { title: "Flex", slug: "flex" },
          { title: "Modal", slug: "modal" },
        ],
      },
      {
        title: "Forms & Controls",
        description: "Components that handle user input and interaction.",
        slug: "forms-and-controls",
        pages: [
          { title: "Button", slug: "button" },
          { title: "Checkbox", slug: "checkbox" },
          { title: "Field", slug: "field" },
          { title: "Radio", slug: "radio" },
          { title: "Slider", slug: "slider" },
          { title: "Switch", slug: "switch" },
        ],
      },
      {
        title: "Status",
        description: "Components for displaying status and progress messaging.",
        slug: "status",
        pages: [
          { title: "Alert", slug: "alert" },
          { title: "Banner", slug: "banner" },
          { title: "Chip", slug: "chip" },
          { title: "Meter", slug: "meter" },
          { title: "Progress", slug: "progress" },
          { title: "Skeleton", slug: "skeleton" },
          { title: "Spinner", slug: "spinner" },
        ],
      },
      {
        title: "Text",
        description: "Components for styling different types of text content.",
        slug: "text",
        pages: [
          { title: "Abbreviation", slug: "abbreviation" },
          { title: "Heading", slug: "heading" },
          { title: "Highlight", slug: "highlight" },
          { title: "Key", slug: "key" },
          { title: "Link", slug: "link" },
          { title: "List", slug: "list" },
          { title: "Paragraph", slug: "paragraph" },
          { title: "Quote", slug: "quote" },
          { title: "Table", slug: "table" },
        ],
      },
    ],
  },
  {
    title: "Utilities",
    description:
      "Explore the design tokens and utility classes included in the stylesheet.",
    slug: "utilities",
    sections: [
      {
        title: "Design Tokens",
        description:
          "Learn about the design tokens included in the stylesheet and how to use them.",
        slug: "design-tokens",
        pages: [
          { title: "Tokens Overview", slug: "tokens-overview" },
          { title: "Animations", slug: "animations" },
          { title: "Borders", slug: "borders" },
          { title: "Colors", slug: "colors" },
          { title: "Shadows", slug: "shadows" },
          { title: "Spacing", slug: "spacing" },
          { title: "Typography", slug: "typography" },
        ],
      },
      {
        title: "Utility Classes",
        description:
          "Learn about the utility classes included in the stylesheet and how to use them.",
        slug: "utility-classes",
        pages: [
          { title: "Accessibility", slug: "accessibility" },
          { title: "Formatting Text", slug: "formatting-text" },
          {
            title: "Markdown/Generated HTML",
            slug: "markdown-generated-html",
          },
          { title: "Overriding Color Mode", slug: "overriding-color-mode" },
          {
            title: "Showing/Hiding Content",
            slug: "showing-hiding-content",
          },
          { title: "Simulating States", slug: "simulating-states" },
        ],
      },
    ],
  },
];
