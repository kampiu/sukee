import { createContext } from "react"
import type { Locale } from "./types"

export type LocaleContextProps = Locale

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined)

export default LocaleContext
