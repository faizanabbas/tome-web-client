import Search from './Search/Search'

export default function Header() {
  return (
    <header className="h-16 flex gap-4">
      <span className="text-3xl font-serif">Tome</span>
      <Search></Search>
    </header>
  )
}
