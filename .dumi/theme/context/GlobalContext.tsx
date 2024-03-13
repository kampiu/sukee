import type { PropsWithChildren } from "react"
import React, { createContext, useContext, useMemo } from "react"

export interface GlobalContextProps {
	prefixCls: string;
}

const GlobalContextState: GlobalContextProps = {
	prefixCls: "",
}

const GlobalContext = createContext<GlobalContextProps>(GlobalContextState)

export const GlobalContextProvider = (
	props: PropsWithChildren<GlobalContextProps>,
) => {
	const {children, prefixCls} = props
	
	const value = useMemo(() => {
		return {
			prefixCls,
		}
	}, [prefixCls])
	
	return (
		<GlobalContext.Provider value={ value }>{ children }</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}
