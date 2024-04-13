import React from "react"
import { QRCode } from "sukee"

const value = "https://kampiu.github.io/sukee"

const App: React.FC = () => (
	<div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
		<QRCode value={value} status="active" />
		<QRCode value={value} status="loading" />
		<QRCode value={value} status="expired" onRefresh={() => console.log("refresh")} />
		<QRCode value={value} status="scanned" />
	</div>
)

export default App
