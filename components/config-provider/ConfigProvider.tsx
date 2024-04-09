import React, { PropsWithChildren, useCallback, useEffect, useMemo } from "react"
import { ConfigContext, ConfigConsumer } from "./context"
import type { ConfigConsumerProps } from "./types"

interface ConfigProviderProps {
	prefixCls?: string
	theme?: "light" | "dark"
}

interface ProviderChildrenProps extends ConfigProviderProps {
	parentContext?: ConfigConsumerProps
}

const defaultPrefixCls = "sk"

function ProviderChildren(props: PropsWithChildren<ProviderChildrenProps>) {
	
	const getPrefixCls = useCallback((suffixCls: string, customizePrefixCls?: string): string => {
		if (customizePrefixCls) return customizePrefixCls
		
		const mergedPrefixCls = props?.prefixCls || props?.parentContext?.getPrefixCls("") || defaultPrefixCls
		
		return suffixCls ? `${ mergedPrefixCls }-${ suffixCls }` : mergedPrefixCls
	}, [props?.parentContext, props?.prefixCls])
	
	const value = useMemo(() => ({getPrefixCls, theme: props?.theme || "light"}), [getPrefixCls, props?.theme])
	
	useEffect(() => {
		document.getElementsByTagName("body")[0].setAttribute("theme-mode", value?.theme)
	}, [value?.theme])
	
	return (
		<ConfigContext.Provider value={ value }>
			{ props?.children }
		</ConfigContext.Provider>
	)
}

function ConfigProvider(props: PropsWithChildren<ConfigProviderProps>) {
	
	return (
		<ConfigConsumer>
			{ (context) => (
				// @ts-ignore
				<ProviderChildren
					parentContext={ context }
					{ ...props }
				/>
			) }
		</ConfigConsumer>
	
	)
}

export default ConfigProvider
