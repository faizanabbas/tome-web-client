function App() {
  return (
    <div className="App">
      <div className="container mt-4 mx-auto px-4 max-w-5xl">
        <div className="flex gap-4">
          <h1 className="text-3xl font-bold">Tome</h1>
          <input
            className="w-full rounded-full border-2 border-slate-500/10 px-3 outline-none"
            type="text"
            placeholder="Search for a book..."
          />
        </div>
      </div>
    </div>
  )
}

export default App
