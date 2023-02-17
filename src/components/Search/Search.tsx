import { useState } from 'react'
import { IVolume } from '../../@types/search'
import SearchContextProvider from '../../context/SearchContext'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

const Search = () => {
  const [searchResults, setSearchResults] = useState<IVolume[]>([])

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
