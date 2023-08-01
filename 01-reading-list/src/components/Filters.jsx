import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './styles/Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const titleId = useId()
  const pagesId = useId()
  const genreId = useId()

  const handleTitle = (event) => {
    setFilters(prevState => ({
      ...prevState,
      title: event.target.value
    }))
  }

  const handlePage = (event) => {
    setFilters(prevState => ({
      ...prevState,
      pages: event.target.value
    }))
  }

  const handleGenre = (event) => {
    setFilters(prevState => ({
      ...prevState,
      genre: event.target.value
    }))
  }

  return (
    <>
      <section className='filters'>
        <div className='title' id={titleId}>
          <label htmlFor='title'>Search by title</label>
          <input
            type='text'
            id='title'
            placeholder='Harry Potter, Frankeinstein ...'
            onInput={handleTitle}
          />
        </div>

        <div className='pages' id={pagesId}>
          <label htmlFor='pages'>Search by pages </label>
          <input
            type='range'
            id='pagesI'
            min={0}
            max={1200}
            step={10}
            value={filters.pages}
            onInput={handlePage}
          />
          <small>Max: {filters.pages} pages</small>
        </div>

        <div className='genre' id={genreId}>
          <label htmlFor='genre'>Search by genre</label>
          <select name='genre' id='genre' onChange={handleGenre}>
            <option value='all'>All</option>
            <option value='Fantasía'>Fantasy</option>
            <option value='Ciencia ficción'>Science fiction</option>
            <option value='Zombies'>Zombies</option>
            <option value='Terror'>Terror</option>
          </select>
        </div>

      </section>
    </>
  )
}
