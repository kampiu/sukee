import React from "react"
import clsx from "clsx"
import { useConfig } from "../config-provider"

const ButtonTypes = ["default", "primary", "ghost", "dashed", "link", "text"] as const
export type ButtonType = typeof ButtonTypes[number];


export interface ButtonProps {
	type?: ButtonType;
	icon?: React.ReactNode;
	disabled?: boolean;
	loading?: boolean | { delay?: number };
	prefixCls?: string;
	className?: string;
	block?: boolean;
	/** 内容 */
	children?: React.ReactNode;
	
	[key: `data-${ string }`]: string;
	
	styles?: { icon: React.CSSProperties };
}

const Button = (props: ButtonProps) => {
	const {children, disabled, className, prefixCls: customizePrefixCls} = props
	
	const  { getPrefixCls } = useConfig()
	const prefixCls = getPrefixCls("button", customizePrefixCls)
	
	return (
		<button className={clsx(prefixCls, className)} disabled={ disabled }>{ children }</button>
	)
}

export default Button
