import { Dispatch, ReactNode, SetStateAction } from "react"

export interface IBook {
  id: string
  title: string
  author: string
  publishedYear: number
  progress: number
  pageCount: number
  imageURL: string
}

export interface IBookListContext {
  bookList: IBook[],
  setBookList: Dispatch<SetStateAction<IBook[]>>
}

export type BookListContextProviderProps = {
  children: ReactNode
}
