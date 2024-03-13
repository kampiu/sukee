import React from "react"
import clsx from "clsx"
import { useConfig } from "../config-provider"

export interface ButtonProps {
	type?: "primary" | "dashed" | "link" | "text" | "default" | "ghost" | "light";
	theme?: "primary" | "secondary" | "tertiary" | "warning" | "danger";
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
	htmlType?: "button" | "submit" | "reset"
}

const Button = (props: ButtonProps) => {
	const {
		children,
		disabled,
		className,
		prefixCls: customizePrefixCls,
		htmlType = "button",
		theme = "primary"
	} = props
	
	const {getPrefixCls} = useConfig()
	const prefixCls = getPrefixCls("button", customizePrefixCls)
	
	const classes = clsx(prefixCls, className, `${ prefixCls }-theme-${ theme }`, {
		[`${ prefixCls }-disabled`]: disabled
	})
	
	return (
		<button type={ htmlType } className={ classes } disabled={ disabled }>{ children }</button>
	)
}

export default Button
