import { useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import SearchResult from './SearchResult'

export default function SearchResultList() {
  const { results } = useContext(SearchContext)
  return (
    <ul className="px-2 max-h-96 overflow-y-auto">
      {results.map((result) => (
        <SearchResult key={result.ISBN} result={result} />
      ))}
    </ul>
  )
}
