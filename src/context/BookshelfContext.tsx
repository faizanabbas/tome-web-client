import { createContext, ReactNode, useEffect, useState } from 'react'
import { IBook } from '../@types/book'

interface IBookshelfContext {
  bookshelf: IBook[]
  addToBookshelf: (newBook: IBook) => void
  removeFromBookshelf: (ISBN: string) => void
}

interface IBookshelfContextProviderProps {
  children: ReactNode
}

const initialContext = {
  bookshelf: [],
  addToBookshelf: (newBook: IBook) => {},
  removeFromBookshelf: (ISBN: string) => {},
} as IBookshelfContext

export const BookshelfContext = createContext<IBookshelfContext>(initialContext)

export const BookshelfContextProvider = ({
  children,
}: IBookshelfContextProviderProps) => {
  const [bookshelf, setBookshelf] = useState<IBook[]>([])

  useEffect(() => {
    const bookshelfData: IBook[] = JSON.parse(
      localStorage.getItem('bookshelf') ?? '[]',
    )
    if (bookshelfData.length > 0) {
      setBookshelf(bookshelfData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf))
  }, [bookshelf])

  const addToBookshelf = (newBook: IBook) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, newBook])
  }

  const removeFromBookshelf = (ISBN: string) => {
    setBookshelf((prevBookshelf) =>
      prevBookshelf.filter((book) => book.ISBN !== ISBN),
    )
  }

  return (
    <BookshelfContext.Provider
      value={{ bookshelf, addToBookshelf, removeFromBookshelf }}
    >
      {children}
    </BookshelfContext.Provider>
  )
}
