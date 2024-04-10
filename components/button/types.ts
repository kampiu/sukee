import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	CSSProperties,
	HTMLAttributes,
	ReactNode
} from "react"

type MergedHTMLAttributes = Omit<
	HTMLAttributes<HTMLElement> &
		ButtonHTMLAttributes<HTMLElement> &
		AnchorHTMLAttributes<HTMLElement>,
	"type"
>

export interface ButtonProps extends MergedHTMLAttributes {
	type?: "default" | "dashed" | "link" | "text" | "light"
	theme?: "primary" | "secondary" | "tertiary" | "warning" | "danger"
	icon?: ReactNode
	disabled?: boolean
	loading?: boolean | { delay?: number }
	prefixCls?: string
	className?: string
	block?: boolean
	/** 内容 */
	children?: ReactNode | string

	// [key: `data-${string}`]: string

	styles?: { icon: CSSProperties }
	htmlType?: "button" | "submit" | "reset"
}
