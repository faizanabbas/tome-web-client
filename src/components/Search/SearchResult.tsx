import { useContext } from 'react'
import { IBook } from '../../@types/book'
import { SearchResultProps } from '../../@types/search'
import defaultThumbnail from '../../assets/no_cover_thumb.gif'
import { BookListContext } from '../../context/BookListContext'
import { SearchContext } from '../../context/SearchContext'

const SearchResult = ({ searchResult }: SearchResultProps) => {
  const { bookList, setBookList } = useContext(BookListContext)
  const { setSearchResults, setSearchQuery } = useContext(SearchContext)

  const clickHandler = () => {
    bookList.map((book) => {
      if (searchResult.id === book.id) return
    })

    const newBook: IBook = {
      id: searchResult.id,
      title: searchResult.volumeInfo.title,
      author:
        typeof searchResult.volumeInfo.authors === 'undefined'
          ? 'Author Unknown'
          : searchResult.volumeInfo.authors[0],
      publishedYear:
        typeof searchResult.volumeInfo.publishedDate === 'undefined'
          ? 0
          : Number.parseInt(searchResult.volumeInfo.publishedDate),
      progress: 0,
      pageCount:
        typeof searchResult.volumeInfo.pageCount === 'undefined'
          ? 0
          : Number.parseInt(searchResult.volumeInfo.pageCount),
      imageURL:
        typeof searchResult.volumeInfo.imageLinks === 'undefined'
          ? defaultThumbnail
          : searchResult.volumeInfo.imageLinks.thumbnail,
    }

    setBookList((prevBookList) => [...prevBookList, newBook])
    setSearchResults([])
    setSearchQuery('')
  }

  return (
    <button onClick={() => clickHandler()}>
      <li className="mx-1 my-3 p-1 flex gap-3 text-left">
        <img
          className="rounded w-10"
          src={
            typeof searchResult.volumeInfo.imageLinks === 'undefined'
              ? defaultThumbnail
              : searchResult.volumeInfo.imageLinks.thumbnail
          }
          alt={searchResult.volumeInfo?.title}
        />
        <div className="flex flex-col justify-center">
          <span className="text-xs">
            {typeof searchResult.volumeInfo.authors === 'undefined'
              ? 'Author Unknown'
              : searchResult.volumeInfo.authors[0]}
            {typeof searchResult.volumeInfo.publishedDate === 'undefined'
              ? ''
              : `, ${searchResult.volumeInfo.publishedDate.slice(0, 4)}`}
          </span>
          <span className="text-sm">{searchResult.volumeInfo?.title}</span>
        </div>
      </li>
    </button>
  )
}

export default SearchResult
