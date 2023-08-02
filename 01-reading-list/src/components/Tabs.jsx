import './styles/Tabs.css'

export function Tabs ({ active, change, books, readList, setFilters }) {
  return (
    <ul className='tabs'>
      <li>
        <button
          onClick={() => {
            change(1)
            setFilters(prevState => ({
              ...prevState,
              readListActive: false
            }))
          }}
          className={
          active === 1 ? 'active' : ''
        }
        >
          Books available ({books.length})
        </button>
      </li>

      <li>
        <button
          onClick={() => {
            change(2)
            setFilters(prevState => ({
              ...prevState,
              readListActive: true
            }))
          }}
          className={
          active === 2 ? 'active' : ''
        }
        >
          Reading list ({readList.length})
        </button>
      </li>
    </ul>
  )
}
