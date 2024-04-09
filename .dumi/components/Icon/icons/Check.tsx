import React from "react"
import { withIcon } from "../withIcon"

function Check() {
	return (
		<>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 12l5 5l10 -10" />
		</>
	)
}

export default withIcon(Check)
