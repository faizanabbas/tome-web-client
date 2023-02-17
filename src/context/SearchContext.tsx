import { createContext, useState } from 'react'
import {
  ISearchContext,
  Volume,
  SearchContextProviderProps,
} from '../@types/search'

const defaultContext = {
  searchResults: [],
  setSearchResults: (searchResults: Volume[]) => {},
  searchQuery: '',
  setSearchQuery: (searchQuery: string) => {},
} as ISearchContext

export const SearchContext = createContext<ISearchContext>(defaultContext)

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchResults, setSearchResults] = useState<Volume[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <SearchContext.Provider
      value={{ searchResults, setSearchResults, searchQuery, setSearchQuery }}
    >
      {children}
    </SearchContext.Provider>
  )
}
