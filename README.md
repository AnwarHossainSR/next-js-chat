# Next Starter

The aim for this starter is to give you a starting point with everything ready to work and launch to production. Web Vitals with 100% by default. Folder structure ready. Tooling ready. SEO ready. SSR ready.

[![image](/public/images/og.png)](https://next-starter-ebon.vercel.app/)

## ⚡️ Stack

- [`Next.js`](https://nextjs.org/)
- [`Typescript`](typescriptlang.org)
- [`Styled Components`](https://styled-components.com/)
- [`ESLint`](https://eslint.org/)
- [`Prettier`](https://prettier.io/)
- [`Husky`](https://github.com/typicode/husky)

## Available Scripts

- `yarn dev` Next dev
- `yarn start`: Next start
- `yarn build`: Next build
- `yarn analyze`: Generate bundle-analyzer
- `yarn lint`: Audit code quality

### ESLint

ESLint extends [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), [`eslint-config-next`](https://www.npmjs.com/package/eslint-config-next), and some accesibility recomendations from [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

There are also some opinionated rules you can change at `.eslintrc.js`.

### Prettier

Prettier will be managed using ESLint.
For Code Styling the Prettier config at `.prettierrc.js` will be used.

Some popular settings are already set.

```js
trailingComma: 'es5',
singleQuote: true,
printWidth: 80,
tabWidth: 2,
useTabs: false,
endOfLine: 'lf'
```

_.prettierrc.js_

Any ESLint config that has conflicts with be overriten and Prettier config will be used in that case.

### VsCode

Some extensions are recommended from `.vscode/extensions.json`

Format on save is disabled so we can leverable formating to ESLint.

CSS Variables extension will check for CSS Custom Properties at `GlobalStyles.tsx`

```json
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"cssVariables.lookupFiles": [
  "**/GlobalStyles.tsx"
]
```

_.vscode/settings.json_

### Absolute imports

Absolute imports working with prefix `@/` starting from `src` folder.

```json
"paths": {
  "@/*": ["src/*"],
}
```

_tsconfig.json_

### Sorting and grouping imports

Imports will be grouped by dependencies, absolute imports (`@/*`) and relative imports.
Also they will be sorted by insensitive ascending order.

![](https://media.giphy.com/media/fuNPWZvyuRutgQ7f4z/giphy.gif)

This is done using [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) and `sort-keys` from _.eslintrc.js_

### Validate staged files

On every commit, the staged files will be validated to pass ESLint config.

This is done using `husky` and `lint-staged`

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --cache --fix --cache-location ./node_modules/.cache/.eslintcache"
  },
```

_package.json_

_next.config.js_

Using this prevents the need to create a `babel.config.json`, which breaks the posibility to use SWC (Rust based and more performant) compiler for Next.js.
