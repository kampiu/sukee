// @ts-ignore
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
// @ts-ignore
import sourceMaps from "rollup-plugin-sourcemaps"
import * as _ from "lodash"
import json from "rollup-plugin-json"
import typescript from "rollup-plugin-typescript2"
import * as path from "path"
import serve from "rollup-plugin-serve"

const pkg = require("./package.json")

const libraryName = "sukee"

const packages = [ "core", "engine" ]

const CommonPlugins = [ json(), typescript({ tsconfig: path.resolve(__dirname, "./", "tsconfig.json") }), commonjs(), resolve(), sourceMaps() ]

const createTask = (name: string) => {
	return {
		input: `packages/${ name }/src/index.ts`,
		output: [
			{
				file: `packages/${ name }/dist/${ name }.umd.js`,
				name: name,
				format: "umd",
				sourcemap: false,
				exports: "auto"
			},
			{
				file: `packages/${ name }/dist/${ name }.esm.js`,
				name: name,
				format: "es",
				sourcemap: false,
				exports: "auto"
			}
		],
		external: [],
		watch: {
			include: [ "packages/core/src/**" ]
		},
		plugins: CommonPlugins
	}
}

export default packages.map(packageName => createTask(packageName))
