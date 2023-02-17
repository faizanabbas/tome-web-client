import { createContext, Dispatch, SetStateAction, ReactNode } from 'react'

export type IVolume = {
  id: string
  volumeInfo: {
    authors?: string[]
    imageLinks?: { thumbnail: string }
    previewLink: string
    publishedDate?: string
    title: string
  }
}

export interface ISearchContext {
  searchResults: IVolume[]
  setSearchResults: Dispatch<SetStateAction<IVolume[]>>
}

export type SearchContextProviderProps = {
  children: ReadNode
}

export type SearchResultProps = {
  searchResult: IVolume
}
