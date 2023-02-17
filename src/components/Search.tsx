import React, { FormEventHandler, useState } from 'react'
import defaultThumbnail from '../assets/no_cover_thumb.gif'

interface IVolume {
  id: string
  volumeInfo: {
    authors?: string[]
    imageLinks?: { thumbnail: string }
    previewLink: string
    publishedDate?: string
    title: string
  }
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const [searchResults, setSearchResults] = useState<IVolume[]>([])

  const submitHandler: FormEventHandler = async (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    if (searchQuery.length === 0) return

    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSearchResults(data.items)
      })
  }

  const searchBarQueryHandler: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchResults([])
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <div className="w-full border-2 border-slate-500/10 rounded">
      <form className="w-full" onSubmit={(e) => submitHandler(e)}>
        <input
          className="w-full h-10 px-3 outline-none"
          type="text"
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={(e) => searchBarQueryHandler(e)}
        />
      </form>

      <ul className="flex flex-col gap-2 bg-white max-h-96 overflow-y-scroll">
        {typeof searchResults === 'undefined'
          ? ''
          : searchResults.map((searchResult) => (
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
                    {typeof searchResult.volumeInfo.publishedDate ===
                    'undefined'
                      ? ''
                      : `, ${searchResult.volumeInfo.publishedDate.slice(
                          0,
                          4,
                        )}`}
                  </span>
                  <span className="text-sm">
                    {searchResult.volumeInfo?.title}
                  </span>
                </div>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Search
