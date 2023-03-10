import { useContext } from 'react'
import { IBook } from '../../../@types/book'
import { BookshelfContext } from '../../../context/BookshelfContext'
import { SearchContext } from '../../../context/SearchContext'

import defaultThumbnail from '../../../assets/no_cover_thumb.gif'
import { generateCommaSeparatedString } from '../../../utils/string-utils'

interface ISearchResultProps {
  result: IBook
}

export default function SearchResult({ result }: ISearchResultProps) {
  const { bookshelf, addToBookshelf } = useContext(BookshelfContext)
  const { setQuery, setResults } = useContext(SearchContext)

  const handler = () => {
    addToBookshelf(result)
    setQuery('')
    setResults([])
  }

  if (!bookshelf.find((book) => book.ISBN === result.ISBN)) {
    return (
      <button
        onClick={() => handler()}
        className="w-full p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-left rounded"
      >
        <li key={result.ISBN} className="flex gap-2">
          <img
            src={result.imageURL ?? defaultThumbnail}
            className="w-10 rounded-sm"
          />
          <div className="flex flex-col">
            <span className="">{result.title}</span>
            <span>
              {result.authors && generateCommaSeparatedString(result.authors)}
            </span>
            <span className="text-xs">{result.publishedYear}</span>
          </div>
        </li>
      </button>
    )
  } else {
    return <></>
  }
}
