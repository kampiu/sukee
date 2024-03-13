import { useSiteData } from "dumi"
import { useParams } from "react-router"
import { createElement, type FC } from "react"
import "./index.less"

const DemoRenderPage: FC = () => {
	const {id} = useParams()
	const {demos} = useSiteData()
	const {component} = demos[id!] || {}
	
	return component && createElement(component)
}

export default DemoRenderPage
