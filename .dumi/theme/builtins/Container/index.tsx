import type { FC, ReactNode } from "react"
import React, { useState } from "react"
import Icon from "../../../components/Icon"
import "./index.less"

const ICONS = {
	info: Icon.Info,
	warning: Icon.Warning,
	success: Icon.Success,
	error: Icon.Error
}

const Container: FC<{ type: string; title?: string; children: ReactNode }> = (props) => {
	const [Icon] = useState(() => ICONS[props.type as keyof typeof ICONS])

	return (
		<div className="dumi-default-container markdown" data-type={props.type}>
			<Icon />
			<h4>{props.title || props.type.toUpperCase()}</h4>
			<section>{props.children}</section>
		</div>
	)
}

export default Container
