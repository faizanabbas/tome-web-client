import { useContext } from 'react'
import { IBook } from '../../@types/book'

import defaultThumbnail from '../../assets/no_cover_thumb.gif'
import { BookshelfContext } from '../../context/BookshelfContext'
import { generateCommaSeparatedString } from '../../utils/string-utils'

interface IBookshelfItemProps {
  book: IBook
}

export default function BookshelfItem({ book }: IBookshelfItemProps) {
  const { updateBookProgress } = useContext(BookshelfContext)

  return (
    <li className="h-20 flex gap-2 justify-between items-center pb-2 border-b last:pb-0 last:border-0">
      <div className="flex gap-2">
        <div className="w-18">
          <img
            src={book.imageURL ?? defaultThumbnail}
            className="w-12 rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">{book.title}</span>
          <span className="text-xs">
            {book.authors && generateCommaSeparatedString(book.authors)}
          </span>
          <span className="text-xs">{book.publishedYear}</span>
        </div>
      </div>
      <div className="text-xs flex flex-col gap-0.5">
        <button onClick={() => updateBookProgress(book, book.currentPage + 1)}>
          &#43;
        </button>
        <span className="">
          {book.currentPage} / {book.pageCount}
        </span>
        <button onClick={() => updateBookProgress(book, book.currentPage - 1)}>
          &#8722;
        </button>
      </div>
    </li>
  )
}
