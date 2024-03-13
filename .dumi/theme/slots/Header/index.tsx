import { ReactComponent as IconClose } from "@ant-design/icons-svg/inline-svg/outlined/close.svg"
import { ReactComponent as IconMenu } from "@ant-design/icons-svg/inline-svg/outlined/menu.svg"
import { useRouteMeta, useSiteData } from "dumi"
import type { SocialTypes } from "../../../theme-api/types";
import ColorSwitch from "../ColorSwitch"
import HeaderExtra from "../HeaderExtra"
import LangSwitch from "../LangSwitch"
import Logo from "../Logo"
import Navbar from "../Navbar"
import RtlSwitch from "../RtlSwitch"
import SearchBar from "../SearchBar"
import SocialIcon from "../SocialIcon"
import React, { useMemo, useState, type FC } from "react"
import "./index.less"

const Header: FC = () => {
	const {frontmatter} = useRouteMeta()
	const [showMenu, setShowMenu] = useState(false)
	const {themeConfig} = useSiteData()
	
	const socialIcons = useMemo(
		() =>
			themeConfig.socialLinks
				? Object.keys(themeConfig.socialLinks)
					.slice(0, 5)
					.map((key) => ({
						icon: key as SocialTypes,
						link: themeConfig.socialLinks?.[key as SocialTypes],
					}))
				: [],
		[themeConfig.socialLinks],
	)
	
	return (
		<div
			className="dumi-default-header"
			data-static={ Boolean(frontmatter.hero) || undefined }
			data-mobile-active={ showMenu || undefined }
			onClick={ () => setShowMenu(false) }
		>
			<div className="dumi-default-header-content">
				<section className="dumi-default-header-left">
					<Logo/>
				</section>
				<section className="dumi-default-header-right">
					<div className="dumi-default-header-right-aside">
						<SearchBar/>
						<RtlSwitch/>
						{ socialIcons.map((item) => (
							<SocialIcon icon={ item.icon } link={ item.link || "" } key={ item.link }/>
						)) }
						<HeaderExtra/>
					</div>
					<Navbar/>
				</section>
				<button
					type="button"
					className="dumi-default-header-menu-btn"
					onClick={ (ev) => {
						ev.stopPropagation()
						setShowMenu((v) => !v)
					} }
				>
					{ showMenu ? <IconClose/> : <IconMenu/> }
				</button>
				<div className="dumi-default-header-extra">
					<LangSwitch/>
					{ themeConfig.prefersColor.switch && <ColorSwitch/> }
				</div>
			</div>
		</div>
	)
}

export default Header
