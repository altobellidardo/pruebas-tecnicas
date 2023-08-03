import { useState } from 'react'

import { Filters } from './Filters'
import { Tabs } from './Tabs'
import { AvailableBooks } from './AvailableBooks'
import { ReadingList } from './ReadingList'

import { useBooks } from '../hooks/useBooks'
import './styles/BookExplorer.css'

export function BookExplorer () {
  const [tab, setTab] = useState(1)
  const { filters, setFilters, filtBooks, readList, setReadList } = useBooks()

  return (
    <section className='explorer'>
      <Filters filters={filters} setFilters={setFilters} />
      <Tabs active={tab} change={setTab} books={filtBooks} readList={readList} setFilters={setFilters} />
      {
        tab === 1
          ? <AvailableBooks books={filtBooks} readList={readList} setReadList={setReadList} />
          : ''
      }
      {
        tab === 2
          ? <ReadingList books={filtBooks} readList={readList} setReadList={setReadList} />
          : ''
      }
    </section>
  )
}
