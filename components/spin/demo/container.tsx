import React from "react"
import { Spin } from "sukee"
import "./container.less"

function App() {
	return (
		<div className="container">
			<Spin tip="加载中" spinning>
				<div className="container-item">内容</div>
			</Spin>
			<div className="container-item">
				<Spin />
			</div>
		</div>
	)
}

export default App
