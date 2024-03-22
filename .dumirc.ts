import { defineConfig } from "dumi"
import path from "path"

export default defineConfig({
	base: "/sukee/", // "https://kampiu.github.io/sukee/
	publicPath: "/sukee/",
	outputPath: "docs",
	resolve: {
		atomDirs: [{type: "component", dir: "components"}],
		codeBlockMode: "passive",
	},
	alias: {
		"sukee/lib": path.join(__dirname, "components"),
		"sukee/es": path.join(__dirname, "components"),
		"sukee/locale": path.join(__dirname, "components/locale"),
		// Change antd from `index.js` to `.dumi/theme/antd.js` to remove deps of root style
		"sukee": require.resolve("./.dumi/theme/sukee.ts"),
	},
	extraBabelPlugins: [
		// [
		// 	"import",
		// 	{
		// 		libraryName: "sukee",
		// 		style: (name: string) => {
		// 			if (name.indexOf("q-r-code") > -1) {
		// 				return `${name.replace("q-r-code", "qrcode")}/style/index.less`;
		// 			}
		// 			return `${name}/style/index.less`;
		// 		},
		// 	},
		// ],
	],
	locales: [
		{id: "zh", name: "中文"},
		{id: "en", name: "English"},
	],
	themeConfig: {
		name: "sukee",
		nav: {
			"zh": [
				{title: "研发", link: "/introduce/development"},
				{title: "组件", link: "/components/button"},
			],
			"en": [
				{title: "Development", link: "/en/introduce/development"},
				{title: "Components", link: "/en/components/button"},
			],
		},
		footer: "Copyright © 2013-2023 Sukee All Rights Reserved.",
		actions: {
			"zh": [
				{
					type: "primary",
					text: "开始使用",
					link: "/guide/introduce",
				},
				{
					text: "配置",
					link: "/config/base",
				},
			],
			"en": [
				{
					type: "primary",
					text: "Start",
					link: "/guide/introduce-en",
				},
				{
					text: "Config",
					link: "/config/base-en",
				},
			],
		},
		features: {
			"zh": [
				{
					title: "内置全文搜索",
					details:
						"不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。",
				},
				{
					title: "更好的编译性能",
					details:
						"通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。",
				},
				{
					title: "开箱即用",
					details: "接入简单，安装即使用，全面融入 Ant Design 风格。",
				},
			],
			"en": [
				{
					title: "Built-in Full-Text search",
					details:
						"There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume.",
				},
				{
					title: "Better Compilation Performance",
					details:
						"By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x.",
				},
				{
					title: "Simple Use",
					details:
						"Simple access, installation and use, fully integrated into Ant Design 5.0 style.",
				},
			],
		},
	},
})
