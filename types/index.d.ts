import type { DOMWindow } from "jsdom"

declare let window: Window

declare const globalThis: {
	window: DOMWindow
}
