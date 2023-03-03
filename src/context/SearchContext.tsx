import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { IBook } from '../@types/book'

interface ISearchContext {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  results: IBook[]
  setResults: Dispatch<SetStateAction<IBook[]>>
}

const initialContext = {
  query: '',
  setQuery: (query: string) => {},
  results: [],
  setResults: (results: IBook[]) => {},
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

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setResults }}>
      {children}
    </SearchContext.Provider>
  )
}
