export interface ConfigConsumerProps {
	getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string
	theme?: "light" | "dark"
}
