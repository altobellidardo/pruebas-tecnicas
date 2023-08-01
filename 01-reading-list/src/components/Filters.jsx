import './styles/Filters.css'

export function Filters () {
  return (
    <>
      <section className='filters'>
        <div className='title'>
          <label htmlFor='title'>Search by title</label>
          <input type='text' id='title' placeholder='Harry Potter, Frankeinstein ...' />
        </div>

        <div className='pages'>
          <label htmlFor='pages'>Search by pages </label>
          <input type='range' id='pages' />
          <small>Max: 1200 pages</small>
        </div>

        <div className='genre'>
          <label htmlFor='genre'>Search by genre</label>
          <select name='genre' id='genre'>
            <option value='all'>All</option>
            <option value='Terror'>Terror</option>
          </select>
        </div>

      </section>
    </>
  )
}
