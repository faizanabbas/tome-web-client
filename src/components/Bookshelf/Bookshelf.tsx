import { useContext } from 'react'
import { BookshelfContext } from '../../context/BookshelfContext'
import BookshelfItem from './BookshelfItem'

export default function Bookshelf() {
  const { bookshelf } = useContext(BookshelfContext)

  if (bookshelf.length <= 0) {
    return <></>
  }

  return (
    <div className="w-full mx-auto border border-gray-200 dark:border-gray-800 rounded border-b-0">
      <table className="w-full text-xs text-left">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="pb-2 pt-2 px-2 font-normal"></th>
            <th className="pb-2 pt-2 px-2 font-normal">Title</th>
            <th className="pb-2 pt-2 px-2 font-normal hidden md:table-cell">
              Author(s)
            </th>
            <th className="pb-2 pt-2 px-2 font-normal hidden md:table-cell">
              Year
            </th>
            <th className="pb-2 pt-2 px-2 font-normal"></th>
            <th className="pb-2 pt-2 px-2 font-normal"></th>
          </tr>
        </thead>
        <tbody>
          {bookshelf.map((book) => (
            <BookshelfItem key={book.ISBN} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
