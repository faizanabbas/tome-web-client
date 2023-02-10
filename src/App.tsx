import { FormEventHandler, useState } from 'react'
import defaultThumbnail from './assets/no_cover_thumb.gif'

interface IVolume {
  id: string
  volumeInfo: {
    title: string
    imageLinks?: { thumbnail: string }
    previewLink: string
  }
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const [searchResults, setSearchResults] = useState<IVolume[]>([])

  const submitHandler: FormEventHandler = async (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSearchResults(data.items)
      })
  }

  return (
    <div className="App">
      <div className="container mt-4 mx-auto px-4 max-w-5xl">
        <div className="flex gap-4">
          <h1 className="text-3xl font-bold">Tome</h1>
          <form className="w-full" onSubmit={(e) => submitHandler(e)}>
            <input
              className="w-full h-full rounded-full border-2 border-slate-500/10 px-3 outline-none"
              type="text"
              placeholder="Search for a book..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />
          </form>
        </div>
      </div>
      <div className="container mt-8 mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {searchResults.map((searchResult) => {
            return (
              <div className="p-4 rounded" key={searchResult.id}>
                <a href={searchResult.volumeInfo?.previewLink} target="_blank">
                  <img
                    className="mx-auto rounded w-40"
                    src={
                      typeof searchResult.volumeInfo.imageLinks === 'undefined'
                        ? defaultThumbnail
                        : searchResult.volumeInfo.imageLinks.thumbnail
                    }
                    alt={searchResult.volumeInfo?.title}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
