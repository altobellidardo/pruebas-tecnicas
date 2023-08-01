import { useFilters } from '../hooks/useFilters'
import './styles/Tabs.css'

export function Tabs ({ active, change }) {
  const { filteredList } = useFilters()

  return (
    <ul className='tabs'>
      <li>
        <button
          onClick={() => change(1)}
          className={
          active === 1 ? 'active' : ''
        }
        >
          Books available ({filteredList.length})
        </button>
      </li>

      <li>
        <button
          onClick={() => change(2)}
          className={
          active === 2 ? 'active' : ''
        }
        >
          Reading list (0)
        </button>
      </li>
    </ul>
  )
}
