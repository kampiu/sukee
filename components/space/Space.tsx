import clsx from "clsx"
import React from "react"
import { useConfig } from "../config-provider"
import { toArray } from "../utils"
import type { SpaceStoreType } from "./context"
import { SpaceProvider } from "./context"
import Item from "./Item"

type SizeType = "small" | "middle" | "large"

export type SpaceSize = SizeType | number

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
	prefixCls?: string
	className?: string
	rootClassName?: string
	style?: React.CSSProperties
	direction?: "horizontal" | "vertical"
	// No `stretch` since many components do not support that.
	align?: "start" | "end" | "center" | "baseline"
	split?: React.ReactNode
	wrap?: boolean
	classNames?: { item: string }
	styles?: { item: React.CSSProperties }
	size?: SpaceSize | [SpaceSize, SpaceSize]
}

export function isPresetSize(size?: SizeType | string | number): size is SizeType {
	return ["small", "middle", "large"].includes(size as string)
}

export function isValidGapNumber(size?: SizeType | string | number): size is number {
	if (!size) {
		// The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
		return false
	}
	return typeof size === "number" && !Number.isNaN(size)
}

function Space(props: SpaceProps) {
	const {
		prefixCls: customizePrefixCls,
		className,
		children,
		align,
		direction = "horizontal",
		split,
		wrap,
		style,
		size = "small"
	} = props

	const [horizontalSize, verticalSize] = Array.isArray(size) ? size : ([size, size] as const)

	const isPresetVerticalSize = isPresetSize(verticalSize)

	const isPresetHorizontalSize = isPresetSize(horizontalSize)

	const isValidVerticalSize = isValidGapNumber(verticalSize)

	const isValidHorizontalSize = isValidGapNumber(horizontalSize)

	const childNodes = toArray(children)

	const { getPrefixCls } = useConfig()
	const prefixCls = getPrefixCls("space", customizePrefixCls)

	const mergedAlign = align === undefined && direction === "horizontal" ? "center" : align

	const itemClassName = clsx(`${prefixCls}-item`)

	let latestIndex = 0
	const nodes = childNodes.map<React.ReactNode>((childNode, index) => {
		if (childNode !== null && childNode !== undefined) {
			latestIndex = index
		}

		const key = (childNode && childNode.key) || `${itemClassName}-${index}`
		return (
			<Item key={key} className={itemClassName} split={split} index={index}>
				{childNode}
			</Item>
		)
	})

	const value = React.useMemo<SpaceStoreType>(() => ({ latestIndex }), [latestIndex])

	// ======
	if (childNodes.length === 0) {
		return null
	}

	const gapStyle: React.CSSProperties = {}

	if (wrap) {
		gapStyle.flexWrap = "wrap"
	}

	if (!isPresetHorizontalSize && isValidHorizontalSize) {
		gapStyle.columnGap = horizontalSize
	}

	if (!isPresetVerticalSize && isValidVerticalSize) {
		gapStyle.rowGap = verticalSize
	}

	console.log(
		"--isPresetHorizontalSize--",
		isPresetHorizontalSize,
		isPresetVerticalSize,
		isValidHorizontalSize,
		isValidVerticalSize
	)
	return (
		<SpaceProvider value={value}>
			<div
				style={{ ...gapStyle, ...style }}
				className={clsx(prefixCls, className, `${prefixCls}-${direction}`, {
					[`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
					[`${prefixCls}-row-gap-${verticalSize}`]: isPresetVerticalSize,
					[`${prefixCls}-col-gap-${horizontalSize}`]: isPresetHorizontalSize
				})}
			>
				{nodes}
			</div>
		</SpaceProvider>
	)
}

export default Space
