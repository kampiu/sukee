import React from "react"
import { Input, QRCode } from "sukee"

function App() {
	const [text, setText] = React.useState("https://kampiu.github.io/sukee")

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
			<QRCode value={text || "-"} />
			<Input
				placeholder="-"
				maxLength={60}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	)
}

export default App
