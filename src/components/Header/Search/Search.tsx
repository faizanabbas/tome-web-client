import { SearchContextProvider } from '../../../context/SearchContext'
import SearchBox from './SearchBox'
import SearchResultList from './SearchResultList'

export default function Search() {
  return (
    <SearchContextProvider>
      <div className="border focus-within:shadow rounded-lg w-full h-fit mx-auto bg-white z-50">
        <SearchBox />
        <SearchResultList />
      </div>
    </SearchContextProvider>
  )
}
