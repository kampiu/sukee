module.exports = {
	root: true,
	globals: {
		NodeJS: true
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: "@typescript-eslint/parser",
	extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "plugin:prettier/recommended"],
	parserOptions: {
		project: "./tsconfig.json",
		ecmaVersion: 6,
		sourceType: "module"
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	rules: {
		"import/no-extraneous-dependencies": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "warn",
		"@typescript-eslint/no-unused-vars": ["warn"],
		"no-underscore-dangle": "off",
		"no-case-declarations": "off",
		"@typescript-eslint/consistent-type-imports": "error"
	}
}
