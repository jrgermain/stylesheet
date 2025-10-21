export type ColorVariant =
  | "brand"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "purple"
  | "magenta"
  | "gray"
  | "black"
  | "white";

export enum Color {
  Brand1 = "var(--color-brand-1)",
  Brand2 = "var(--color-brand-2)",
  Brand3 = "var(--color-brand-3)",
  Brand4 = "var(--color-brand-4)",
  Brand5 = "var(--color-brand-5)",
  Brand6 = "var(--color-brand-6)",
  Brand7 = "var(--color-brand-7)",
  Brand8 = "var(--color-brand-8)",
  Brand9 = "var(--color-brand-9)",
  BrandTransparent = "var(--color-brand-transparent)",
  BrandExtraTransparent = "var(--color-brand-extra-transparent)",
  Red1 = "var(--color-red-1)",
  Red2 = "var(--color-red-2)",
  Red3 = "var(--color-red-3)",
  Red4 = "var(--color-red-4)",
  Red5 = "var(--color-red-5)",
  Red6 = "var(--color-red-6)",
  Red7 = "var(--color-red-7)",
  Red8 = "var(--color-red-8)",
  Red9 = "var(--color-red-9)",
  RedTransparent = "var(--color-red-transparent)",
  RedExtraTransparent = "var(--color-red-extra-transparent)",
  Orange1 = "var(--color-orange-1)",
  Orange2 = "var(--color-orange-2)",
  Orange3 = "var(--color-orange-3)",
  Orange4 = "var(--color-orange-4)",
  Orange5 = "var(--color-orange-5)",
  Orange6 = "var(--color-orange-6)",
  Orange7 = "var(--color-orange-7)",
  Orange8 = "var(--color-orange-8)",
  Orange9 = "var(--color-orange-9)",
  OrangeTransparent = "var(--color-orange-transparent)",
  OrangeExtraTransparent = "var(--color-orange-extra-transparent)",
  Yellow1 = "var(--color-yellow-1)",
  Yellow2 = "var(--color-yellow-2)",
  Yellow3 = "var(--color-yellow-3)",
  Yellow4 = "var(--color-yellow-4)",
  Yellow5 = "var(--color-yellow-5)",
  Yellow6 = "var(--color-yellow-6)",
  Yellow7 = "var(--color-yellow-7)",
  Yellow8 = "var(--color-yellow-8)",
  Yellow9 = "var(--color-yellow-9)",
  YellowTransparent = "var(--color-yellow-transparent)",
  YellowExtraTransparent = "var(--color-yellow-extra-transparent)",
  Green1 = "var(--color-green-1)",
  Green2 = "var(--color-green-2)",
  Green3 = "var(--color-green-3)",
  Green4 = "var(--color-green-4)",
  Green5 = "var(--color-green-5)",
  Green6 = "var(--color-green-6)",
  Green7 = "var(--color-green-7)",
  Green8 = "var(--color-green-8)",
  Green9 = "var(--color-green-9)",
  GreenTransparent = "var(--color-green-transparent)",
  GreenExtraTransparent = "var(--color-green-extra-transparent)",
  Teal1 = "var(--color-teal-1)",
  Teal2 = "var(--color-teal-2)",
  Teal3 = "var(--color-teal-3)",
  Teal4 = "var(--color-teal-4)",
  Teal5 = "var(--color-teal-5)",
  Teal6 = "var(--color-teal-6)",
  Teal7 = "var(--color-teal-7)",
  Teal8 = "var(--color-teal-8)",
  Teal9 = "var(--color-teal-9)",
  TealTransparent = "var(--color-teal-transparent)",
  TealExtraTransparent = "var(--color-teal-extra-transparent)",
  Blue1 = "var(--color-blue-1)",
  Blue2 = "var(--color-blue-2)",
  Blue3 = "var(--color-blue-3)",
  Blue4 = "var(--color-blue-4)",
  Blue5 = "var(--color-blue-5)",
  Blue6 = "var(--color-blue-6)",
  Blue7 = "var(--color-blue-7)",
  Blue8 = "var(--color-blue-8)",
  Blue9 = "var(--color-blue-9)",
  BlueTransparent = "var(--color-blue-transparent)",
  BlueExtraTransparent = "var(--color-blue-extra-transparent)",
  Purple1 = "var(--color-purple-1)",
  Purple2 = "var(--color-purple-2)",
  Purple3 = "var(--color-purple-3)",
  Purple4 = "var(--color-purple-4)",
  Purple5 = "var(--color-purple-5)",
  Purple6 = "var(--color-purple-6)",
  Purple7 = "var(--color-purple-7)",
  Purple8 = "var(--color-purple-8)",
  Purple9 = "var(--color-purple-9)",
  PurpleTransparent = "var(--color-purple-transparent)",
  PurpleExtraTransparent = "var(--color-purple-extra-transparent)",
  Magenta1 = "var(--color-magenta-1)",
  Magenta2 = "var(--color-magenta-2)",
  Magenta3 = "var(--color-magenta-3)",
  Magenta4 = "var(--color-magenta-4)",
  Magenta5 = "var(--color-magenta-5)",
  Magenta6 = "var(--color-magenta-6)",
  Magenta7 = "var(--color-magenta-7)",
  Magenta8 = "var(--color-magenta-8)",
  Magenta9 = "var(--color-magenta-9)",
  MagentaTransparent = "var(--color-magenta-transparent)",
  MagentaExtraTransparent = "var(--color-magenta-extra-transparent)",
  Gray1 = "var(--color-gray-1)",
  Gray2 = "var(--color-gray-2)",
  Gray3 = "var(--color-gray-3)",
  Gray4 = "var(--color-gray-4)",
  Gray5 = "var(--color-gray-5)",
  Gray6 = "var(--color-gray-6)",
  Gray7 = "var(--color-gray-7)",
  Gray8 = "var(--color-gray-8)",
  Gray9 = "var(--color-gray-9)",
  GrayTransparent = "var(--color-gray-transparent)",
  GrayExtraTransparent = "var(--color-gray-extra-transparent)",
  Body = "var(--color-body)",
  BodyAlt = "var(--color-body-alt)",
  BodyText = "var(--color-body-text)",
  BodyTextAlt = "var(--color-body-text-alt)",
  BodyTextInvert = "var(--color-body-text-invert)",
  Shadow = "var(--color-shadow)",
  Border = "var(--color-border)",
}

export enum FontSize {
  XS = "var(--font-size-xs)",
  S = "var(--font-size-s)",
  M = "var(--font-size-m)",
  L = "var(--font-size-l)",
  XL = "var(--font-size-xl)",
  XXL = "var(--font-size-2xl)",
  XXXL = "var(--font-size-3xl)",
  XXXXL = "var(--font-size-4xl)",
}

export enum FontWeight {
  Light = "var(--font-weight-light)",
  Normal = "var(--font-weight-normal)",
  Semibold = "var(--font-weight-semibold)",
  Bold = "var(--font-weight-bold)",
  Black = "var(--font-weight-black)",
}

export enum FontFamily {
  Body = "var(--font-family-body)",
  Heading = "var(--font-family-heading)",
  Mono = "var(--font-family-mono)",
}

export enum Space {
  None = "var(--space-none)",
  XXXS = "var(--space-3xs)",
  XXS = "var(--space-2xs)",
  XS = "var(--space-xs)",
  S = "var(--space-s)",
  M = "var(--space-m)",
  L = "var(--space-l)",
  XL = "var(--space-xl)",
  XXL = "var(--space-2xl)",
  XXXL = "var(--space-3xl)",
  BodyX = "var(--body-x)",
  BodyY = "var(--body-y)",
}

export enum Radius {
  None = "var(--radius-none)",
  S = "var(--radius-s)",
  M = "var(--radius-m)",
  L = "var(--radius-l)",
  XL = "var(--radius-xl)",
  XXL = "var(--radius-2xl)",
  Full = "var(--radius-full)",
}

export enum Shadow {
  None = "var(--shadow-none)",
  S = "var(--shadow-s)",
  M = "var(--shadow-m)",
  L = "var(--shadow-l)",
  XL = "var(--shadow-xl)",
}

export enum BorderWidth {
  None = "var(--border-none)",
  S = "var(--border-s)",
  M = "var(--border-m)",
  L = "var(--border-l)",
  XL = "var(--border-xl)",
}

export enum EasingFunction {
  Default = "var(--ease-default)",
  Out = "var(--ease-out)",
  In = "var(--ease-in)",
  Both = "var(--ease-both)",
  BothSubtle = "var(--ease-both-subtle)",
  Spring = "var(--ease-spring)",
}

export enum Duration {
  Short = "var(--duration-short)",
  Medium = "var(--duration-medium)",
  Long = "var(--duration-long)",
  ExtraLong = "var(--duration-extra-long)",
}
