import { useContext } from 'react'
import { BookListContext } from '../../context/BookListContext'

const BookList = () => {
  const { bookList } = useContext(BookListContext)

  return (
    <div className="overflow-auto rounded-lg border-2 border-gray-200 dark:border-slate-900">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200 dark:bg-slate-800 dark:border-slate-900">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Cover
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Title
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Author
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Published
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr
              className="even:bg-gray-200/30 dark:bg-slate-800 dark:even:bg-slate-800/90"
              key={book.id}
            >
              <td className="p-3">
                <img
                  className="rounded w-10"
                  src={book.imageURL}
                  alt={book.title}
                />
              </td>
              <td className="p-3">{book.title}</td>
              <td className="p-3">{book.author}</td>
              <td className="p-3">{book.publishedYear}</td>
              <td className="p-3">
                {book.progress}/{book.pageCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookList
