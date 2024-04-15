import React, { PropsWithChildren, ReactNode } from "react"
import { useSpaceContext } from "./context"

export interface ItemProps {
	index: number
	split?: ReactNode
	className?: string
}

function Item(props: PropsWithChildren<ItemProps>) {
	const { className, split, index } = props

	const { latestIndex } = useSpaceContext()

	return (
		<>
			<div className={className}>{props?.children}</div>
			{index < latestIndex && split && <span className={`${className}-split`}>{split}</span>}
		</>
	)
}

export default Item
