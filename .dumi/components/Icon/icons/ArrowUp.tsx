import React from "react"
import { withIcon } from "../withIcon"

function ArrowUp() {
	return (
		<>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 5l0 14" />
			<path d="M18 11l-6 -6" />
			<path d="M6 11l6 -6" />
		</>
	)
}

export default withIcon(ArrowUp)
