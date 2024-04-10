import React from "react"
import { Input } from "sukee"
import "sukee/es/style/index.less"

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
			<Input prefix="前缀" suffix="后缀" placeholder="请输入" />
			<Input addonAfter="after" addonBefore="before" placeholder="请输入" />
			<Input
				addonAfter="after"
				addonBefore="before"
				prefix="前缀"
				suffix="后缀"
				placeholder="请输入"
			/>
		</div>
	)
}

export default App
