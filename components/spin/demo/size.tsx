import React from "react"
import { Spin } from "sukee"

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
			<Spin size="small" />
			<Spin size="middle" />
			<Spin size="large" />
		</div>
	)
}

export default App
