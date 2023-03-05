import { FormEventHandler, useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'

export default function SearchBox() {
  const {
    query,
    setQuery,
    setResults,
    searchForBook: performSearch,
  } = useContext(SearchContext)

  const changeHandler: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setResults([])
    setQuery(e.currentTarget.value)
  }

  const submitHandler: FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    performSearch()
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        placeholder="What are you reading?"
        value={query}
        onChange={(e) => changeHandler(e)}
        className="w-full outline-none py-1 px-3 bg-transparent"
      ></input>
    </form>
  )
}
