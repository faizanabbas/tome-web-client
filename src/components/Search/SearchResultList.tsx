import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import SearchResult from './SearchResult'

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext)

  return (
    <ul className="flex flex-col gap-2 bg-white max-h-96 overflow-y-scroll">
      {typeof searchResults === 'undefined'
        ? ''
        : searchResults.map((searchResult) => (
            <SearchResult searchResult={searchResult} />
          ))}
    </ul>
  )
}

export default SearchResultList
