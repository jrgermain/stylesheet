const isBlank = (str: string) => str.trim() === "";
const isNotBlank = (str: string) => !isBlank(str);

const getLeadingSpaceCount = (str: string) => {
  let count = 0;
  for (; count < str.length; count++) {
    if (str[count] !== " ") break;
  }
  return count;
};

/** Removes extra whitespace from all sides of a block of markdown. */
export const trimMarkdownPadding = (str: string) => {
  // Split the string into lines, then remove trailing whitespace from each line
  const lines = str.split("\n").map((line) => line.trimEnd()); // RIGHT

  // Remove leading and trailing blank lines
  // Since we trimmed the lines earlier, we can just check for empty strings.
  while (lines.at(0) === "") lines.shift(); // TOP
  while (lines.at(-1) === "") lines.pop(); // BOTTOM

  // Find the minimum indent level of the non-blank lines
  const indentLevels = lines.filter(isNotBlank).map(getLeadingSpaceCount);
  const dedentAmount = Math.min(...indentLevels);

  // Remove the minimum indent level from the beginning of each line
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].slice(dedentAmount); // LEFT
  }

  return lines.join("\n");
};
