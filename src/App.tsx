import Header from './components/Header/Header'
import { BookshelfContextProvider } from './context/BookshelfContext'

export default function App() {
  return (
    <div className="h-screen p-4">
      <div className="max-w-screen-md mx-auto">
        <BookshelfContextProvider>
          <Header />
        </BookshelfContextProvider>
      </div>
    </div>
  )
}
