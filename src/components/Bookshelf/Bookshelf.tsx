import { useContext } from 'react'
import { BookshelfContext } from '../../context/BookshelfContext'
import BookshelfItem from './BookshelfItem'

export default function Bookshelf() {
  const { bookshelf } = useContext(BookshelfContext)

  let bookshelfHeadingText =
    bookshelf.length > 0
      ? 'Your bookshelf'
      : 'Your bookshelf is looking empty...'

  if (bookshelf.length > 0) {
    return (
      <>
        <h1 className="text-4xl font-serif mt-12 mb-1">
          {bookshelfHeadingText}
        </h1>
        <ul className="space-y-2 border rounded p-2">
          {bookshelf.map((book) => (
            <BookshelfItem key={book.ISBN} book={book} />
          ))}
        </ul>
      </>
    )
  } else {
    return (
      <>
        <h1 className="text-4xl font-serif mt-12 mb-1">
          {bookshelfHeadingText}
        </h1>
      </>
    )
  }
}
