export const colorVariants = [
  "brand",
  "red",
  "orange",
  "yellow",
  "green",
  "sky",
  "blue",
  "purple",
  "magenta",
  "gray",
  "black",
  "white",
] as const;
export type ColorVariant = (typeof colorVariants)[number];
export const isColorVariant = (x: unknown): x is ColorVariant =>
  colorVariants.includes(x as ColorVariant);

export const standardPalletColors = [
  "brand-1",
  "brand-2",
  "brand-3",
  "brand-4",
  "brand-5",
  "brand-6",
  "brand-7",
  "brand-8",
  "brand-9",
  "brand-transparent",
  "brand-extra-transparent",
  "red-1",
  "red-2",
  "red-3",
  "red-4",
  "red-5",
  "red-6",
  "red-7",
  "red-8",
  "red-9",
  "red-transparent",
  "red-extra-transparent",
  "orange-1",
  "orange-2",
  "orange-3",
  "orange-4",
  "orange-5",
  "orange-6",
  "orange-7",
  "orange-8",
  "orange-9",
  "orange-transparent",
  "orange-extra-transparent",
  "yellow-1",
  "yellow-2",
  "yellow-3",
  "yellow-4",
  "yellow-5",
  "yellow-6",
  "yellow-7",
  "yellow-8",
  "yellow-9",
  "yellow-transparent",
  "yellow-extra-transparent",
  "green-1",
  "green-2",
  "green-3",
  "green-4",
  "green-5",
  "green-6",
  "green-7",
  "green-8",
  "green-9",
  "green-transparent",
  "green-extra-transparent",
  "sky-1",
  "sky-2",
  "sky-3",
  "sky-4",
  "sky-5",
  "sky-6",
  "sky-7",
  "sky-8",
  "sky-9",
  "sky-transparent",
  "sky-extra-transparent",
  "blue-1",
  "blue-2",
  "blue-3",
  "blue-4",
  "blue-5",
  "blue-6",
  "blue-7",
  "blue-8",
  "blue-9",
  "blue-transparent",
  "blue-extra-transparent",
  "purple-1",
  "purple-2",
  "purple-3",
  "purple-4",
  "purple-5",
  "purple-6",
  "purple-7",
  "purple-8",
  "purple-9",
  "purple-transparent",
  "purple-extra-transparent",
  "magenta-1",
  "magenta-2",
  "magenta-3",
  "magenta-4",
  "magenta-5",
  "magenta-6",
  "magenta-7",
  "magenta-8",
  "magenta-9",
  "magenta-transparent",
  "magenta-extra-transparent",
  "gray-1",
  "gray-2",
  "gray-3",
  "gray-4",
  "gray-5",
  "gray-6",
  "gray-7",
  "gray-8",
  "gray-9",
  "gray-transparent",
  "gray-extra-transparent",
] as const;
export type StandardPalletColor = (typeof standardPalletColors)[number];
export const isStandardPalletColor = (x: unknown): x is StandardPalletColor =>
  standardPalletColors.includes(x as StandardPalletColor);

export const semanticColors = [
  "body",
  "body-alt",
  "body-text",
  "body-text-alt",
  "body-text-invert",
  "shadow",
  "outline",
] as const;
export type SemanticColor = (typeof semanticColors)[number];
export const isSemanticColor = (x: unknown): x is SemanticColor =>
  semanticColors.includes(x as SemanticColor);

export type Color = StandardPalletColor | SemanticColor;
export const isColor = (x: unknown): x is Color =>
  isStandardPalletColor(x) || isSemanticColor(x);

export const fontSizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
  "3xl",
  "4xl",
] as const;
export type FontSize = (typeof fontSizes)[number];
export const isFontSize = (x: unknown): x is FontSize =>
  fontSizes.includes(x as FontSize);

export const fontWeights = [
  "light",
  "normal",
  "semibold",
  "bold",
  "black",
] as const;
export type FontWeight = (typeof fontWeights)[number];
export const isFontWeight = (x: unknown): x is FontWeight =>
  fontWeights.includes(x as FontWeight);

export const fontFamilies = ["body", "heading", "mono"] as const;
export type FontFamily = (typeof fontFamilies)[number];
export const isFontFamily = (x: unknown): x is FontFamily =>
  fontFamilies.includes(x as FontFamily);

export const spaces = [
  "none",
  "3xs",
  "2xs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
  "3xl",
  "body-x",
  "body-y",
] as const;
export type Space = (typeof spaces)[number];
export const isSpace = (x: unknown): x is Space => spaces.includes(x as Space);

export const radii = ["none", "s", "m", "l", "xl", "2xl", "full"] as const;
export type Radius = (typeof radii)[number];
export const isRadius = (x: unknown): x is Radius =>
  radii.includes(x as Radius);

export const shadows = ["none", "s", "m", "l", "xl"] as const;
export type Shadow = (typeof shadows)[number];
export const isShadow = (x: unknown): x is Shadow =>
  shadows.includes(x as Shadow);

export const borderWidths = ["none", "s", "m", "l", "xl"] as const;
export type BorderWidth = (typeof borderWidths)[number];
export const isBorderWidth = (x: unknown): x is BorderWidth =>
  borderWidths.includes(x as BorderWidth);

export const easingFunctions = [
  "default",
  "out",
  "in",
  "both",
  "both-subtle",
  "spring",
] as const;
export type EasingFunction = (typeof easingFunctions)[number];
export const isEasingFunction = (x: unknown): x is EasingFunction =>
  easingFunctions.includes(x as EasingFunction);

export const durations = ["short", "medium", "long", "extra-long"] as const;
export type Duration = (typeof durations)[number];
export const isDuration = (x: unknown): x is Duration =>
  durations.includes(x as Duration);

const buildResolver = (predicate: (x: unknown) => boolean, prefix: string) => {
  return (value: unknown) => {
    if (predicate(value)) {
      return `var(--${prefix}-${value})`;
    }
    return String(value);
  };
};

export const resolveColor = buildResolver(isColor, "color");
export const resolveFontSize = buildResolver(isFontSize, "font-size");
export const resolveFontWeight = buildResolver(isFontWeight, "font-weight");
export const resolveFontFamily = buildResolver(isFontFamily, "font-family");
export const resolveSpace = buildResolver(isSpace, "space");
export const resolveRadius = buildResolver(isRadius, "radius");
export const resolveShadow = buildResolver(isShadow, "shadow");
export const resolveBorderWidth = buildResolver(isBorderWidth, "border");
export const resolveEasingFunction = buildResolver(isEasingFunction, "ease");
export const resolveDuration = buildResolver(isDuration, "duration");
