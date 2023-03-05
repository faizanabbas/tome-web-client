import { useContext } from 'react'
import { BookshelfContext } from '../../context/BookshelfContext'
import BookshelfItem from './BookshelfItem'

export default function Bookshelf() {
  const { bookshelf } = useContext(BookshelfContext)

  if (bookshelf.length > 0) {
    return (
      <ul className="space-y-2 border rounded p-2">
        {bookshelf.map((book) => (
          <BookshelfItem key={book.ISBN} book={book} />
        ))}
      </ul>
    )
  } else {
    return <></>
  }
}
