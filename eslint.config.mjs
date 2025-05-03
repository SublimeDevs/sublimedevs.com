import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginPrettier from "eslint-plugin-prettier";
import pluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: pluginPrettier,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-sort-props": [
        1,
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: "first",
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: ["key", "ref"],
          locale: "auto",
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
];

export default eslintConfig;
