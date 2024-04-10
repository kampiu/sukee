import clsx from "clsx"
import React from "react"
import { useConfig } from "../config-provider"
import type { ButtonProps } from "./types"

function Button(props: ButtonProps) {
	const {
		children,
		disabled,
		className,
		prefixCls: customizePrefixCls,
		htmlType = "button",
		theme = "primary",
		type = "default"
	} = props

	const { getPrefixCls } = useConfig()
	const prefixCls = getPrefixCls("button", customizePrefixCls)

	const onClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
	) => {
		if (disabled) {
			event.preventDefault()
			return
		}
		props?.onClick?.(event)
	}

	const mergeClassName = clsx(
		prefixCls,
		className,
		`${prefixCls}-${theme}`,
		`${prefixCls}-${type}`,
		{
			[`${prefixCls}-disabled`]: disabled
		}
	)

	return (
		<button type={htmlType} onClick={onClick} className={mergeClassName} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
