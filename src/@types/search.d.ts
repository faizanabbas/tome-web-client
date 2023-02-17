import { createContext, Dispatch, SetStateAction, ReactNode } from 'react'

export type Volume = {
  id: string
  volumeInfo: {
    authors?: string[]
    imageLinks?: { thumbnail: string }
    previewLink: string
    publishedDate?: string
    pageCount?: string
    title: string
  }
}

export interface ISearchContext {
  searchResults: Volume[]
  setSearchResults: Dispatch<SetStateAction<Volume[]>>
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

export type SearchContextProviderProps = {
  children: ReactNode
}

export type SearchResultProps = {
  searchResult: Volume
}
