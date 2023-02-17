import Search from './Search/Search'

const Header = () => {
  return (
    <div className="flex gap-4 absolute z-10 left-0 right-0">
      <h1 className="text-3xl font-bold">Tome</h1>
      <Search />
    </div>
  )
}

export default Header
