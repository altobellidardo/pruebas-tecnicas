import { initialFilters } from '../logic/constants'
import './styles/Filters.css'

export function Filters ({ filters, setFilters }) {
  const handleFilter = (event, filter) => {
    setFilters(prevState => ({
      ...prevState,
      [filter]: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div className='title'>
        <label htmlFor='title'>Search by title</label>
        <input
          type='text'
          id='title'
          placeholder='Harry Potter, Frankeinstein ...'
          onInput={(event) => handleFilter(event, 'title')}
        />
      </div>

      <div className='catego2'>
        <div className='pages'>
          <label htmlFor='pages'>Search by pages </label>
          <input
            type='range'
            id='pagesI'
            min={0}
            max={initialFilters.pages}
            step={10}
            value={filters.pages}
            onInput={(event) => handleFilter(event, 'pages')}
          />
          <small>Max: {filters.pages} pages</small>
        </div>

        <div className='genre'>
          <label htmlFor='genre'>Search by genre</label>
          <select
            name='genre'
            id='genre'
            onChange={(event) => handleFilter(event, 'genre')}
          >
            <option value='all'>All</option>
            <option value='Fantasía'>Fantasy</option>
            <option value='Ciencia ficción'>Science fiction</option>
            <option value='Zombies'>Zombies</option>
            <option value='Terror'>Terror</option>
          </select>
        </div>
      </div>

    </section>
  )
}
