import SearchContextProvider from '../../context/SearchContext'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

const Search = () => {
  return (
    <div className="w-full border-2 border-slate-500/10 rounded">
      <SearchContextProvider>
        <SearchBar />
        <SearchResultList />
      </SearchContextProvider>
    </div>
  )
}

export default Search
