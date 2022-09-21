import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
import * as _ from "lodash"
// @ts-ignore
import json from "rollup-plugin-json"
import typescript from "rollup-plugin-typescript"

const pkg = require("./package.json")

const libraryName = "sukee"

export default [
	{
		input: `src/${libraryName}.ts`,
		output: [
			{ file: pkg.main, name: _.camelCase(libraryName), format: "umd", sourcemap: false },
			{ file: pkg.module, name: _.camelCase(libraryName), format: "es", sourcemap: false }
		],
		external: [],
		watch: {
			include: ["src/**", "packages/**"]
		},
		plugins: [json(), typescript(), commonjs(), resolve(), sourceMaps()]
	},
	{
		input: `packages/core/src/core.ts`,
		output: [
			{
				file: "packages/core/dist/core.umd.js",
				name: "core",
				format: "umd",
				sourcemap: false
			},
			{ file: "packages/core/dist/core.esm.js", name: "core", format: "es", sourcemap: false }
		],
		external: [],
		watch: {
			include: ["src/**", "packages/**"]
		},
		plugins: [json(), typescript(), commonjs(), resolve(), sourceMaps()]
	}
]
