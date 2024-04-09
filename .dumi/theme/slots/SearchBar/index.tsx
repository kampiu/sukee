import { useSiteSearch } from "dumi"
import type { FC } from "react"
import React, { useEffect, useRef, useState } from "react"
import Icon from "../../../components/Icon"
import SearchResult from "../SearchResult"
import "./index.less"
import { Input } from "./Input"
import { Mask } from "./Mask"

const isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(
	typeof navigator !== "undefined" ? navigator?.platform : ""
)

/** Determine if the element that triggered the event is an input element */
const isInput = (target: HTMLElement) =>
	["TEXTAREA", "INPUT"].includes(target.tagName) || target.contentEditable === "true"

const SearchBar: FC = () => {
	// ======================== Refs ========================
	const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement)
	const modalInputRef = useRef<HTMLInputElement>(null)

	// ======================== Status ========================
	const [focusing, setFocusing] = useState(false)
	const [symbol, setSymbol] = useState("⌘")
	const [modalVisible, setModalVisible] = useState(false)

	const { keywords, setKeywords, result, loading } = useSiteSearch()

	useEffect(() => {
		// why put useEffect?
		// to avoid Text content mismatch between server & client in ssr
		if (!isAppleDevice) {
			setSymbol("Ctrl")
		}

		const handler = (event: KeyboardEvent) => {
			if (
				((isAppleDevice ? event.metaKey : event.ctrlKey) && event.key === "k") ||
				(event.key === "/" && !isInput(event.target as HTMLElement))
			) {
				event?.preventDefault()

				if (inputRef.current) {
					const { top, bottom, left, right } = inputRef.current?.getBoundingClientRect()
					const isInViewport =
						top >= 0 &&
						left >= 0 &&
						bottom <= window.innerHeight &&
						right <= window.innerWidth

					if (isInViewport) {
						inputRef.current?.focus()
					} else {
						setKeywords("")
						setModalVisible(true)
						setTimeout(() => {
							modalInputRef.current?.focus()
						})
					}
				}
			}

			if (event.key === "Escape") {
				event?.preventDefault()
				setModalVisible(false)
			}
		}

		document.addEventListener("keydown", handler)

		return () => document.removeEventListener("keydown", handler)
	}, [])

	return (
		<div className="dumi-default-search-bar">
			<Icon.Search className="dumi-default-search-bar-svg" />
			<Input
				ref={inputRef}
				onFocus={() => setFocusing(true)}
				onBlur={() => {
					// wait for item click
					setTimeout(() => {
						setFocusing(false)
					}, 1)
				}}
				onChange={(keywords) => setKeywords(keywords)}
			/>
			<span className="dumi-default-search-shortcut">{symbol} K</span>
			{keywords.trim() && focusing && (result.length || !loading) && !modalVisible && (
				<div className="dumi-default-search-popover">
					<section>
						<SearchResult data={result} loading={loading} />
					</section>
				</div>
			)}

			<Mask
				visible={modalVisible}
				onMaskClick={() => {
					setModalVisible(false)
				}}
				onClose={() => setKeywords("")}
			>
				<div style={{ position: "relative" }}>
					<Icon.Search className="dumi-default-search-bar-svg" />
					<Input
						onFocus={() => setFocusing(true)}
						onBlur={() => {
							// wait for item click
							setTimeout(() => {
								setFocusing(false)
							}, 1)
						}}
						onChange={(keywords) => setKeywords(keywords)}
						ref={modalInputRef}
					/>
				</div>

				<SearchResult
					data={result}
					loading={loading}
					onItemSelect={() => {
						setModalVisible(false)
					}}
				/>

				<footer>
					<ul className="dumi-default-search-modal-commands">
						<li className="dumi-default-search-modal-commands-arrow">
							<span className="dumi-default-search-modal-shortcut">
								<Icon.ArrowUp size={10} fill="rgba(0, 0, 0, 0.45)" />
							</span>
							<span className="dumi-default-search-modal-shortcut">
								<Icon.ArrowDown size={10} fill="rgba(0, 0, 0, 0.45)" />
							</span>
							<span className="dumi-default-search-modal-commands-text">
								to navigate
							</span>
						</li>
						<li>
							<span className="dumi-default-search-modal-shortcut">esc</span>
							<span className="dumi-default-search-modal-commands-text">
								to close
							</span>
						</li>
					</ul>
				</footer>
			</Mask>
		</div>
	)
}

export default SearchBar
