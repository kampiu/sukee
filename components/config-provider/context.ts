import React, { useContext } from "react"
import type { ConfigConsumerProps } from "./types"

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string): string => {
	if (customizePrefixCls) return customizePrefixCls

	return suffixCls ? `sk-${suffixCls}` : "sk"
}
export const ConfigContext = React.createContext<ConfigConsumerProps>({
	getPrefixCls: defaultGetPrefixCls
})

export const ConfigConsumer = ConfigContext.Consumer

export function useConfig() {
	return useContext(ConfigContext)
}
