module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    '__DEV__': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'prefer-arrow',
    'eslint-plugin-tsdoc'
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src']
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    // eslint official
    'newline-before-return': 'error',
    'no-console': 'warn',
    'require-yield': 'error',
    'no-use-before-define': 'off',

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '[Rr]eact'
      }
    ],

    // prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false
      }
    ],

    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    // prettier
    'prettier/prettier': [
      'error', {
        bracketSpacing: true,
        printWidth: 120,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false
      }
    ],
    'tsdoc/syntax': 'warn'
  }
};
