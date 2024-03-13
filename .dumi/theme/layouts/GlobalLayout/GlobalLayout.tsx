// import { ConfigProvider } from "@feb/kk-design"
// import zhCN from "@feb/kk-design/es/locale/zh_CN"
// import { useOutlet } from "dumi"
import { useOutlet } from "react-router-dom"
import React from "react"
import { GlobalContextProvider } from "../../context/GlobalContext"
import ScrollBar from "../../slots/ScrollBar"
import "./index.less"

function GlobalLayout() {
	const outlet = useOutlet()
	
	return (
		<GlobalContextProvider prefixCls="dumi-default">
			<div className="global-layout">
				<ScrollBar>{ outlet }</ScrollBar>
			</div>
		</GlobalContextProvider>
	)
}

export default GlobalLayout
