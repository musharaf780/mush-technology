module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'import', 'prettier'],
  rules: {
    // General Code Quality
    'no-var': 'error',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-arrow-callback': 'off',

    // Code Consistency
    'max-lines': ['warn', 500],
    'max-depth': ['warn', 4],
    'max-statements-per-line': ['warn', { max: 1 }],
    'max-lines-per-function': ['warn', 150],

    // React Rules
    'react/react-in-jsx-scope': 'off', // React 17+
    'react/prop-types': 'off', // no TS, but simple app
    'react-hooks/exhaustive-deps': 'warn',

    // Import Rules
    'import/no-anonymous-default-export': 'error',

    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
