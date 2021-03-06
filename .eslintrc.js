module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  ignorePatterns: [".eslintrc.js", "next.config.js"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error", { semi: false, printWidth: 120 }],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
