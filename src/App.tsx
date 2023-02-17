import BookList from './components/BookList/BookList'
import Header from './components/Header'
import BookListProvider from './context/BookListContext'

function App() {
  return (
    <BookListProvider>
      <div className="App h-screen dark:bg-black dark:text-white mt-0 px-4">
        <div className="container relative mx-auto py-4 px-4 max-w-5xl">
          <Header />
          <div className="absolute top-24 left-0 right-0 w-full">
            <BookList />
          </div>
        </div>
      </div>
    </BookListProvider>
  )
}

export default App
