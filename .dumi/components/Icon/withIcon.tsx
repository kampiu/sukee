import type { ComponentType } from "react"
import React from "react"
import { IconProps } from "./types"

export const withIcon = (IconComponent: ComponentType) => (props: IconProps) => {
	const size = props?.size || 24
	const fill = props?.fill || "none"
	const color = props?.color || "currentColor"
	const strokeWidth = props?.strokeWidth || "2"

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			fill={fill}
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={props.className}
		>
			<IconComponent />
		</svg>
	)
}
