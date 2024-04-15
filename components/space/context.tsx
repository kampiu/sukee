import React from "react"

export interface SpaceStoreType {
	latestIndex: number
}

export const SpaceContext = React.createContext<SpaceStoreType>({
	latestIndex: 0
})

export const SpaceProvider = SpaceContext.Provider

export function useSpaceContext(): SpaceStoreType {
	return React.useContext(SpaceContext)
}
