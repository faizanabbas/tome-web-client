import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { IBook } from '../@types/book'
import { performSearch } from '../api/api'

interface ISearchContext {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  results: IBook[]
  setResults: Dispatch<SetStateAction<IBook[]>>
  searchForBook: () => void
}

const initialContext = {
  query: '',
  setQuery: (newQuery: string) => {},
  results: [],
  setResults: (newResults: IBook[]) => {},
  searchForBook: () => {},
} as ISearchContext

interface ISearchContextProviderProps {
  children: ReactNode
}

export const SearchContext = createContext<ISearchContext>(initialContext)

export const SearchContextProvider = ({
  children,
}: ISearchContextProviderProps) => {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<IBook[]>([])

  const searchForBook = async () => {
    await performSearch(query).then((books) => setResults(books))
  }

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
        searchForBook: searchForBook,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
