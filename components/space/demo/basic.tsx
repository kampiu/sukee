import React from "react"
import { Button, Space } from "sukee"
import "./basic.less"

function App() {
	return (
		<div className="space-align-container">
			<div className="space-align-block">
				<Space align="center">
					center
					<Button type="default">Primary</Button>
					<span className="mock-block">Block</span>
				</Space>
			</div>
			<div className="space-align-block">
				<Space align="start">
					start
					<Button type="default">Primary</Button>
					<span className="mock-block">Block</span>
				</Space>
			</div>
			<div className="space-align-block">
				<Space align="end">
					end
					<Button type="default">Primary</Button>
					<span className="mock-block">Block</span>
				</Space>
			</div>
			<div className="space-align-block">
				<Space align="baseline">
					baseline
					<Button type="default">Primary</Button>
					<span className="mock-block">Block</span>
				</Space>
			</div>
		</div>
	)
}

export default App
