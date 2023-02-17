import { createContext, useState } from 'react'
import {
  BookListContextProviderProps,
  IBook,
  IBookListContext,
} from '../@types/book'

const defaultContext = {
  bookList: [],
  setBookList: (bookList: IBook[]) => {},
} as IBookListContext

export const BookListContext = createContext<IBookListContext>(defaultContext)

export default function BookListProvider({
  children,
}: BookListContextProviderProps) {
  const [bookList, setBookList] = useState<IBook[]>([])

  return (
    <BookListContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BookListContext.Provider>
  )
}
