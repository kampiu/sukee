import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
import * as _ from "lodash"
// @ts-ignore
import json from "rollup-plugin-json"
import typescript from "rollup-plugin-typescript"
import babel from "rollup-plugin-babel"
import serve from "rollup-plugin-serve"

const pkg = require("./package.json")

const libraryName = "sukee"

export default [
	{
		// env: "production",
		input: `src/${libraryName}.ts`,
		output: [
			{
				file: pkg.main,
				name: _.camelCase(libraryName),
				format: "umd",
				sourcemap: false,
				exports: "auto"
			},
			{
				file: pkg.module,
				name: _.camelCase(libraryName),
				format: "es",
				sourcemap: false,
				exports: "auto"
			}
		],
		external: [],
		watch: {
			include: ["src/**"]
		},
		plugins: [
			babel({
				exclude: "node_modules/**"
			}),
			json(),
			typescript(),
			commonjs(),
			resolve(),
			sourceMaps(),
			process.env.ENV === "development"
				? serve({
						// 开发环境，本地起一个静态服务
						open: true, // 自动在浏览器打开
						openPage: "/public/index.html", // 入口页面路径
						port: "8080", // 端口号
						contentBase: "" // 静态文件路径， ""代表按照当前目录结构
				  })
				: null
		]
	},
	{
		// env: "production",
		input: `packages/core/src/core.ts`,
		output: [
			{
				file: "packages/core/dist/core.umd.js",
				name: "core",
				format: "umd",
				sourcemap: false,
				exports: "auto"
			},
			{
				file: "packages/core/dist/core.esm.js",
				name: "core",
				format: "es",
				sourcemap: false,
				exports: "auto"
			}
		],
		external: [],
		watch: {
			include: ["packages/core/src/**"]
		},
		plugins: [json(), typescript(), commonjs(), resolve(), sourceMaps()]
	}
]
