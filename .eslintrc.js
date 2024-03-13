module.exports = {
	extends: [
		"airbnb",
		"prettier",
		"plugin:compat/recommended",
		"plugin:jest/recommended",
		"plugin:react/recommended",
		"plugin:import/typescript",
		"plugin:markdown/recommended",
	],
	env: {
		browser: true,
		node: true,
		jasmine: true,
		jest: true,
		es6: true,
	},
	settings: {
		react: {
			version: "detect",
		},
		polyfills: [ "Promise", "URL" ],
		"import/resolver": {
			typescript: {},
		},
	},
	parser: "@typescript-eslint/parser",
	plugins: [
		"react",
		"@babel",
		"jest",
		"@typescript-eslint",
		"react-hooks",
		"unicorn",
		"markdown",
		"lodash",
	],
	overrides: [
		{
			// In v2, explicitly apply eslint-plugin-markdown's `markdown`
			// processor on any Markdown files you want to lint.
			files: [ "components/*/demo/*.md" ],
			processor: "markdown/markdown",
		}
	],
	rules: {
		"react/no-unused-class-component-methods": 0,
		"import/no-extraneous-dependencies": 0,
		"import/extensions": 0,
	},
	globals: {
		gtag: true,
	},
}
