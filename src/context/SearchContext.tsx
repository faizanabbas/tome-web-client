import { createContext, useState } from 'react'
import {
  ISearchContext,
  IVolume,
  SearchContextProviderProps,
} from '../@types/search'

const defaultContext = {
  searchResults: [],
  setSearchResults: (searchResults: IVolume[]) => {},
} as ISearchContext

export const SearchContext = createContext<ISearchContext>(defaultContext)

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchResults, setSearchResults] = useState<IVolume[]>([])

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  )
}
