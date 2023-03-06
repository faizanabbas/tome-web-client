import { useContext, useEffect, useRef, useState } from 'react'
import { IBook } from '../../@types/book'

import defaultThumbnail from '../../assets/no_cover_thumb.gif'
import { BookshelfContext } from '../../context/BookshelfContext'
import { generateCommaSeparatedString } from '../../utils/string-utils'

interface IBookshelfItemProps {
  book: IBook
}

export default function BookshelfItem({ book }: IBookshelfItemProps) {
  const { updateBookProgress, removeFromBookshelf } =
    useContext(BookshelfContext)

  const menu = useRef<HTMLDivElement>(null)

  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeOpenMenu = (e: any) => {
    if (menu.current && openMenu && !menu.current.contains(e.target)) {
      setOpenMenu(false)
    }
  }

  const progress = (book.currentPage / book.pageCount) * 100

  document.addEventListener('mousedown', closeOpenMenu)

  return (
    <tr className="border-b border-gray-20">
      <td className="px-2 min-w-[60px] w-10 py-2">
        <img
          src={book.imageURL ?? defaultThumbnail}
          className="h-14 w-10 mx-auto object-cover rounded-sm"
        />
      </td>
      <td className="px-2 w-24">{book.title}</td>
      <td className="px-2 w-16 hidden md:table-cell">
        {book.authors && generateCommaSeparatedString(book.authors)}
      </td>
      <td className="px-2 w-16 hidden md:table-cell">{book.publishedYear}</td>
      <td className="px-2 w-48">
        <div className="w-full flex flex-col md:flex-row gap-2 items-center rounded">
          <div className="w-full bg-gray-200 rounded h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex items-center">
            <span className="text-xs mr-2">
              {book.currentPage}/{book.pageCount}
            </span>
            <button
              onClick={() => updateBookProgress(book, book.currentPage - 1)}
              className="bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 hover:shadow focus:shadow-inner  text-gray-700 h-5 w-6 rounded-l"
            >
              -
            </button>
            <button
              onClick={() => updateBookProgress(book, book.currentPage + 1)}
              className="bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 hover:shadow focus:shadow-inner text-gray-700 h-5 w-6 rounded-r"
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td className="px-2 w-1 text-right pr-5">
        <div ref={menu} className="static inline-block">
          <div>
            <button
              type="button"
              className="bg-white flex items-center justify-center h-5 w-5 p-3 text-xs font-medium text-gray-700"
              id="options-menu"
              onClick={() => toggleOpenMenu()}
            >
              ⋮
            </button>
          </div>
          {openMenu ? (
            <div className="absolute mt-2 ml-[-4em] origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1 ">
                <button
                  className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                  onClick={() => removeFromBookshelf(book.ISBN)}
                >
                  <span className="flex flex-col">Remove</span>
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </td>
    </tr>
  )
}
