import clsx from "clsx"
import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react"
import React from "react"
import { useConfig } from "../config-provider"

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type"> {
	placeholder?: string
	disabled?: boolean
	prefixCls?: string
	className?: string
	styles?: { icon: CSSProperties }
	addonAfter?: ReactNode
	addonBefore?: ReactNode
	prefix?: ReactNode
	suffix?: ReactNode
}

function Input(props: InputProps) {
	const {
		placeholder,
		disabled,
		className,
		prefixCls: customizePrefixCls,
		addonAfter,
		addonBefore,
		prefix,
		suffix,
		value,
		onChange
	} = props

	const { getPrefixCls } = useConfig()
	const prefixCls = getPrefixCls("input", customizePrefixCls)

	const mergeClassName = clsx(`${prefixCls}-group`, className, {
		[`${prefixCls}-disabled`]: disabled
	})

	return (
		<span className={mergeClassName}>
			{addonAfter && <span className={`${prefixCls}-addon`}>{addonAfter}</span>}
			<span className={`${prefixCls}-wrapper`}>
				{prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
				<input
					onChange={onChange}
					value={value}
					className={prefixCls}
					type="text"
					placeholder={placeholder}
				/>
				{suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
			</span>
			{addonBefore && <span className={`${prefixCls}-addon`}>{addonBefore}</span>}
		</span>
	)
}

export default Input
