import React from "react"
import { Space } from "sukee"

const styles = {
	fontSize: 14,
	color: "rgba(0, 119, 250, 1)"
}

function App() {
	return (
		<Space split="|">
			<span style={styles}>连接</span>
			<span style={styles}>连接</span>
			<span style={styles}>连接</span>
		</Space>
	)
}

export default App
