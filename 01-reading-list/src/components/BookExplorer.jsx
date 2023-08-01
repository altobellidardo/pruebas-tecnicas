import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { Filters } from './Filters'
import { Tabs } from './Tabs'
import { Book } from './Book'
import { NoBooks } from './NoBooks'
import './styles/BookExplorer.css'

export function BookExplorer () {
  const { filteredList } = useFilters()
  const [tab, setTab] = useState(1)

  return (
    <>
      <Filters />
      <div className='explorer'>
        <Tabs active={tab} change={setTab} />
        {
          tab === 1
            ? <div className='bookList'>
              {
              filteredList.length === 0
                ? <NoBooks />
                : filteredList.map(bk => (
                  <Book key={bk.book.ISBN} props={bk.book} />
                ))
            } </div>
            : ''
        }
        {
          tab === 2
            ? <NoBooks />
            : ''
        }

      </div>
    </>
  )
}
