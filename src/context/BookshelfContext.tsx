import { createContext, ReactNode, useEffect, useState } from 'react'
import { IBook } from '../@types/book'

interface IBookshelfContext {
  bookshelf: IBook[]
  addToBookshelf: (newBook: IBook) => void
  updateBookProgress: (book: IBook, newCurrentPage: number) => void
  removeFromBookshelf: (ISBN: string) => void
}

interface IBookshelfContextProviderProps {
  children: ReactNode
}

const initialContext = {
  bookshelf: [],
  addToBookshelf: (newBook: IBook) => {},
  updateBookProgress: (book: IBook, newCurrentPage: number) => {},
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

  const updateBookProgress = (book: IBook, newCurrentPage: number) => {
    if (newCurrentPage < 0 || newCurrentPage > book.pageCount) return

    const newBookshelf = [...bookshelf]

    setBookshelf(
      newBookshelf.map((b) => {
        if (b.ISBN === book.ISBN) {
          b.currentPage = newCurrentPage
        }
        return b
      }),
    )
  }

  const removeFromBookshelf = (ISBN: string) => {
    setBookshelf((prevBookshelf) =>
      prevBookshelf.filter((book) => book.ISBN !== ISBN),
    )
  }

  return (
    <BookshelfContext.Provider
      value={{
        bookshelf,
        addToBookshelf,
        updateBookProgress,
        removeFromBookshelf,
      }}
    >
      {children}
    </BookshelfContext.Provider>
  )
}
