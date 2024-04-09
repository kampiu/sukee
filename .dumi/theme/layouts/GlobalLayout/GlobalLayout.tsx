// import { ConfigProvider } from "@feb/kk-design"
// import zhCN from "@feb/kk-design/es/locale/zh_CN"
// import { useOutlet } from "dumi"
import { useOutlet } from "react-router-dom"
import React from "react"
import { GlobalContextProvider } from "../../context/GlobalContext"
import ScrollBar from "../../slots/ScrollBar"
import { ConfigProvider } from "sukee"
import "sukee/es/style/index.less"
import "./index.less"
import { usePrefersColor } from "dumi"

function GlobalLayout() {
	const outlet = useOutlet()
	const [color] = usePrefersColor();
	
	return (
		<GlobalContextProvider prefixCls="dumi-default">
			<ConfigProvider theme={color}>
				<div className="global-layout">
					<ScrollBar>{ outlet }</ScrollBar>
				</div>
			</ConfigProvider>
		</GlobalContextProvider>
	)
}

export default GlobalLayout
