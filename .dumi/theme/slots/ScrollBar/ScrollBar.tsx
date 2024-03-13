import React from "react"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import "./index.less"

interface ScrollbarProps {
	style?: React.CSSProperties;
	children?: JSX.Element | JSX.Element[] | null | boolean | string | React.ReactNode;
	/** 是否自动隐藏 */
	autoHide?: boolean;
}

function ScrollBar(props: ScrollbarProps) {
	const {children, autoHide = true, style} = props
	
	return (
		<SimpleBar autoHide={ autoHide } className="scroll-layout" style={ style }>
			{ children }
		</SimpleBar>
	)
}

export default ScrollBar
