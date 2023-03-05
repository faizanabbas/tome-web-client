import { useContext } from 'react'
import { IBook } from '../../../@types/book'
import { BookshelfContext } from '../../../context/BookshelfContext'
import { SearchContext } from '../../../context/SearchContext'

import defaultThumbnail from '../../../assets/no_cover_thumb.gif'

interface ISearchResultProps {
  result: IBook
}

export default function SearchResult({ result }: ISearchResultProps) {
  const { addToBookshelf } = useContext(BookshelfContext)
  const { setQuery, setResults } = useContext(SearchContext)

  const handler = () => {
    addToBookshelf(result)
    setQuery('')
    setResults([])
  }

  const generateAuthorsString = (authors: string[]): string => {
    let str = ''
    authors.forEach((author, i) => {
      if (i < authors.length - 1) {
        str += author + ', '
      } else {
        str += author
      }
    })
    return str
  }

  return (
    <button
      onClick={() => handler()}
      className="w-full p-1 hover:bg-slate-200 text-left rounded"
    >
      <li key={result.ISBN} className="flex gap-2">
        <img
          src={result.imageURL ?? defaultThumbnail}
          className="w-10 rounded-sm"
        />
        <div className="flex flex-col">
          <span className="">{result.title}</span>
          <span>{result.authors && generateAuthorsString(result.authors)}</span>
          <span className="text-xs">{result.publishedDate?.getFullYear()}</span>
        </div>
      </li>
    </button>
  )
}
