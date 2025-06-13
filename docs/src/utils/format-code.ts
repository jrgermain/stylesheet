import { format, type BuiltInParserName } from "prettier";

export const formatCode = async (
  code: string,
  language: BuiltInParserName = "html"
) => {
  const formattedCode = await format(code, {
    parser: language,
    printWidth: 60,
  });

  return formattedCode.trimStart();
};
