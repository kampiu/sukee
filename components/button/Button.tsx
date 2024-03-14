import React from "react"
import clsx from "clsx"
import { useConfig } from "../config-provider"

type MergedHTMLAttributes = Omit<
	React.HTMLAttributes<HTMLElement> &
	React.ButtonHTMLAttributes<HTMLElement> &
	React.AnchorHTMLAttributes<HTMLElement>,
	'type'
>;

export interface ButtonProps extends MergedHTMLAttributes {
	type?: "default" | "dashed" | "link" | "text" | "light";
	theme?: "primary" | "secondary" | "tertiary" | "warning" | "danger";
	icon?: React.ReactNode;
	disabled?: boolean;
	loading?: boolean | { delay?: number };
	prefixCls?: string;
	className?: string;
	block?: boolean;
	/** 内容 */
	children?: React.ReactNode | string;
	
	[key: `data-${ string }`]: string;
	
	styles?: { icon: React.CSSProperties };
	htmlType?: "button" | "submit" | "reset"
}

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
	
	const {getPrefixCls} = useConfig()
	const prefixCls = getPrefixCls("button", customizePrefixCls)
	
	const onClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
		if (disabled) {
			event.preventDefault();
			return
		}
		props?.onClick?.(event)
	}
	
	const classes = clsx(
		prefixCls,
		className,
		`${ prefixCls }-${ theme }`,
		`${ prefixCls }-${ type }`,
		{
			[`${ prefixCls }-disabled`]: disabled
		}
	)
	
	return (
		<button type={ htmlType } onClick={onClick} className={ classes } disabled={ disabled }>{ children }</button>
	)
}

export default Button
