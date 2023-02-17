import React, { FormEventHandler, useState, useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext)

  const { setSearchResults } = useContext(SearchContext)

  const submitHandler: FormEventHandler = async (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    if (searchQuery.length === 0) return

    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!(typeof data.items === 'undefined')) {
          setSearchResults(data.items)
        }
      })
  }

  const searchBarQueryHandler: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchResults([])
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <form className="w-full" onSubmit={(e) => submitHandler(e)}>
      <input
        className="w-full h-10 pl-3 border-none rounded outline-none dark:bg-slate-800"
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={(e) => searchBarQueryHandler(e)}
      />
    </form>
  )
}

export default SearchBar
