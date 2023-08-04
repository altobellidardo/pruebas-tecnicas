import { useState } from 'react'
import { Header } from './components/Header'

import { Filters } from './components/Filters'
import { Tabs } from './components/Tabs'
import { BookDisplay } from './components/BookDisplay'

import { useBooks } from './hooks/useBooks'
import { posterStates } from './logic/constants'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App () {
  const [tab, setTab] = useState(1)

  const { filters, setFilters, avaiBooks, filtBooks, readList, filtList, modifyLists } = useBooks()

  return (
    <>
      <Header />
      <main className='explorer'>

        <Filters
          filters={filters}
          setFilters={setFilters}
        />

        <Tabs
          tabProps={{ active: tab, change: setTab }}
          avaiQty={avaiBooks.length}
          rlQty={readList.length}
          deleteRL={modifyLists}
        />

        <BookDisplay
          books={tab === 1 ? filtBooks : filtList}
          modify={modifyLists}
          mode={tab === 1 ? posterStates.available : posterStates.readlist}
        />

      </main>
    </>
  )
}

export default App
