import clsx from "clsx"
import type { CSSProperties, ReactNode } from "react"
import React from "react"
import { useConfig } from "sukee/es/config-provider"

export interface InputProps {
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
		suffix
	} = props

	const { getPrefixCls } = useConfig()
	const prefixCls = getPrefixCls("input", customizePrefixCls)

	const mergeClassName = clsx(`${prefixCls}-group`, className, {
		[`${prefixCls}-disabled`]: disabled
	})

	// let element = <input className={ prefixCls } type="text" placeholder={ placeholder }/>

	// ================== Prefix & Suffix ================== //
	// if (prefix || suffix) {
	// 	element = (
	// 		<span className={`${prefixCls}-wrapper`}>
	// 			{prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
	// 			{element}
	// 			{suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
	// 		</span>
	// 	)
	// }
	// if (addonAfter || addonBefore) {
	// 	element = (
	// 		<span className={mergeClassName}>
	// 			{addonAfter && <span className={`${prefixCls}-addon`}>{addonAfter}</span>}
	// 			<span className={`${prefixCls}-addon`}>{addonAfter}</span>
	// 			{element}
	// 			{addonBefore && <span className={`${prefixCls}-addon`}>{addonBefore}</span>}
	// 			<span className={`${prefixCls}-addon`}>{addonBefore}</span>
	// 		</span>
	// 	)
	// }

	return (
		<span className={mergeClassName}>
			{addonAfter && <span className={`${prefixCls}-addon`}>{addonAfter}</span>}
			<span className={`${prefixCls}-wrapper`}>
				{prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
				<input className={prefixCls} type="text" placeholder={placeholder} />
				{suffix && <span className={`${prefixCls}-suffix`}>{suffix}</span>}
			</span>
			{addonBefore && <span className={`${prefixCls}-addon`}>{addonBefore}</span>}
		</span>
	)
}

export default Input
