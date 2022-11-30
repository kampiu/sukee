import React, { useState } from "react"

export interface ButtonProps {
	children: string
}

function Button({ children }: ButtonProps) {
	return <button type="button">{children}</button>
}

export default Button
