import { useState } from 'react'

// import { Filters } from './Filters'
import { Tabs } from './Tabs'
import { Filters } from './Filters'
import { AvailableBooks } from './AvailableBooks'
// import { ReadingList } from './ReadingList'

import { useBooks } from '../hooks/useBooks'
import './styles/BookExplorer.css'
import { NoBooks } from './NoBooks'

export function BookExplorer () {
  const [tab, setTab] = useState(1)

  const { avaiBooks, filtBooks, filters, setFilters, readList, modifyLists } = useBooks()
  // const { filters, setFilters, avaiBooks, setAvaiBooks, readList, setReadList, modifyRL, filtBooks } = useBooks()

  return (
    <section className='explorer'>
      <Filters filters={filters} setFilters={setFilters} />
      <Tabs tabProps={{ active: tab, change: setTab }} avaiQty={avaiBooks.length} rlQty={readList.length} />
      {
        tab === 1
          ? <AvailableBooks books={filtBooks} modify={modifyLists} />
          // ? <AvailableBooks books={avaiBooks} readList={readList} setReadList={setReadList} />
          : ''
      }
      {
        tab === 2
          ? <NoBooks />
          : ''
      }
    </section>
  )
}
