import { FormEventHandler, useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const submitHandler: FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    console.log(searchQuery)
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
    </div>
  )
}

export default App
