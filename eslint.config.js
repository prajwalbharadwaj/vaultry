import antfu from "@antfu/eslint-config";

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: "single",
      semi: true
    },
    ignores: [
      "local_modules/**",
      "dev-dist/**",
      "env/**",
      "locales/**",
      "trash/**",
      ".github/**",
      ".vscode/**"
    ]
  },
  {
    rules: {
      "style/semi": [2, "always"]
    }
  }
);
