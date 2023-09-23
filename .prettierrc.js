module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "auto",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: true,
  importOrder: [
    "^shared/(.*)$",
    "^entities/(.*)$",
    "^feature/(.*)$",
    "^widgets/(.*)$",
    "^app/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
