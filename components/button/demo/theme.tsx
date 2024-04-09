import React from "react"
import { Button } from "sukee"
import "sukee/es/style/index.less"

function App() {
	return (
		<div>
			<Button theme="primary">primary</Button>
			<Button theme="secondary">secondary</Button>
			<Button theme="tertiary">tertiary</Button>
			<Button theme="warning">warning</Button>
			<Button theme="danger">danger</Button>
		</div>
	)
}

export default App
