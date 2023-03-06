import Bookshelf from './components/Bookshelf/Bookshelf'
import Header from './components/Header/Header'
import { BookshelfContextProvider } from './context/BookshelfContext'

export default function App() {
  return (
    <div className="h-screen pt-4 px-2 md:px-4">
      <div className="max-w-screen-2xl mx-auto">
        <BookshelfContextProvider>
          <Header />
          <Bookshelf />
        </BookshelfContextProvider>
      </div>
    </div>
  )
}
