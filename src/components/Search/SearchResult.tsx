import { SearchResultProps } from '../../@types/search'
import defaultThumbnail from '../../assets/no_cover_thumb.gif'

const SearchResult = ({ searchResult }: SearchResultProps) => {
  return (
    <li key={searchResult.id} className="mx-1 p-1 flex gap-3">
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
  )
}

export default SearchResult
