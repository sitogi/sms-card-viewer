module.exports = {
  plugins: ['stylelint-order'],
  extends: [
		'stylelint-config-standard',
		'./node_modules/prettier-stylelint/config.js'
	],
  ignoreFiles: [
    '**/node_modules/**',
    'src/styles/**'
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'no-extra-semicolons': null,
    'order/properties-alphabetical-order': true,
    'comment-empty-line-before': null,
    "declaration-empty-line-before": null,
  },
};
