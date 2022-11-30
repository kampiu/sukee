import { defineConfig, normalizePath } from "vite"
import react from "@vitejs/plugin-react"
import { join, resolve } from "path"
import viteEslint from "vite-plugin-eslint"
import autoprefixer from "autoprefixer"

const lessVariablesPath = normalizePath(resolve("./src/assets/styles/variables.less"))
const lessMixinsPath = normalizePath(resolve("./src/assets/styles/mixins.less"))

const rollupOptions = {
	external: ["react", "react-dom"],
	output: {
		globals: {
			React: "React",
		},
	},
}

export default defineConfig({
	server: {
		port: 3000,
	},
	define: {
		"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
				}),
			],
		},
		modules: {
			localsConvention: "camelCaseOnly",
			generateScopedName: "[local]_[hash:base64:10]",
		},
		preprocessorOptions: {
			less: {
				additionalData: `
					@import "${lessVariablesPath}";
					@import "${lessMixinsPath}";
				`,
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		alias: [{ find: "@", replacement: join(__dirname, "src") }],
	},
	plugins: [
		react(),
		viteEslint({
			exclude: ["**/*.spec.ts", "**/node_modules/**"],
		}),
	],
	build: {
		rollupOptions,
		sourcemap: true,
		minify: false,
		manifest: true,
		commonjsOptions: {
			exclude: [/node_modules\/moment/],
			transformMixedEsModules: true,
		},
		lib: {
			entry: "./src/sukee.ts",
			name: "sukeeUIDemo",
			fileName: "sukee-ui",
			// 导出模块格式
			formats: ["es", "umd", "iife", "cjs"],
		},
	},
})
