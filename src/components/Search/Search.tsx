import SearchContextProvider from '../../context/SearchContext'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

const Search = () => {
  return (
    <div className="w-full border-2 border-gray-200 bg-gray-200 dark:border-slate-800 dark:bg-slate-800 rounded-lg">
      <SearchContextProvider>
        <SearchBar />
        <SearchResultList />
      </SearchContextProvider>
    </div>
  )
}

export default Search
