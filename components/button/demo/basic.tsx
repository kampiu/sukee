import { Button } from "sukee"
import type { ButtonProps } from "sukee"
import React from "react"

const ButtonTypes: Array<ButtonProps["type"]> = ["default", "dashed", "light", "text", "link"]

const App = () => {
	return ButtonTypes.map(type => {
		return (
			<div>
				<Button type={ type } theme="primary">{type} Button</Button>
				<Button type={ type } theme="secondary">{type} Button</Button>
				<Button type={ type } theme="tertiary">{type} Button</Button>
				<Button type={ type } theme="warning">{type} Button</Button>
				<Button type={ type } theme="danger">{type} Button</Button>
			</div>
		)
	})
}

export default App
