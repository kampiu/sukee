import React from "react"
import type { ButtonProps } from "sukee"
import { Button } from "sukee"
import "sukee/es/style/index.less"

const ButtonTypes: Array<ButtonProps["type"]> = ["default", "dashed", "light", "text", "link"]

const App = () =>
	ButtonTypes.map((type) => (
		<Button key={type} type={type} disabled theme="primary">
			{type} Button
		</Button>
	))

export default App
