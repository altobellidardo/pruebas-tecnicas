import { useState } from 'react'

import { Filters } from './Filters'
import { Tabs } from './Tabs'
import { AvailableBooks } from './AvailableBooks'
import { ReadingList } from './ReadingList'

import { useBooks } from '../hooks/useBooks'
import './styles/BookExplorer.css'

export function BookExplorer () {
  const [tab, setTab] = useState(1)
  const { filters, setFilters, avaiBooks, setAvaiBooks, readList, setReadList, modifyRL, filtBooks } = useBooks()

  return (
    <section className='explorer'>
      <Filters filters={filters} setFilters={setFilters} />
      <Tabs tabProps={{ active: tab, change: setTab }} avaiQty={avaiBooks.length} rlQty={readList.length} />
      {
        tab === 1
          ? <AvailableBooks books={avaiBooks} readList={readList} setReadList={setReadList} />
          : ''
      }
      {
        tab === 2
          ? <ReadingList readList={readList} setReadList={setReadList} />
          : ''
      }
    </section>
  )
}
