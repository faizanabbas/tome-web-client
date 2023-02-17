import { useContext } from 'react'
import { BookListContext } from '../../context/BookListContext'

const BookList = () => {
  const { bookList, setBookList } = useContext(BookListContext)

  const updateProgress = (pos: number, increment: boolean) => {
    let books = [...bookList]
    let book = { ...books[pos] }
    if (increment && book.progress < book.pageCount) {
      book.progress += 1
    } else if (!increment && book.progress > 0) {
      book.progress -= 1
    } else {
      return
    }
    books[pos] = book
    setBookList(books)
  }

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
          {bookList.map((book, i) => (
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
                <div className="flex gap-2 items-center">
                  {book.progress}/{book.pageCount}
                  <div className="flex gap-1">
                    <button
                      onClick={() => updateProgress(i, false)}
                      className="rounded-full bg-gray-200/50 w-4 h-4 flex justify-center items-center"
                    >
                      <span className="text-sm">-</span>
                    </button>
                    <button
                      onClick={() => updateProgress(i, true)}
                      className="rounded-full bg-gray-200/50 w-4 h-4 flex justify-center items-center"
                    >
                      <span className="text-sm">+</span>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookList
