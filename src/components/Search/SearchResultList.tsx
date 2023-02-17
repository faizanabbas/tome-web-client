import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import SearchResult from './SearchResult'

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext)

  return (
    <ul className="flex flex-col gap-2 bg-white dark:bg-slate-800 max-h-96 overflow-y-scroll">
      {searchResults.map((searchResult) => (
        <SearchResult key={searchResult.id} searchResult={searchResult} />
      ))}
    </ul>
  )
}

export default SearchResultList
