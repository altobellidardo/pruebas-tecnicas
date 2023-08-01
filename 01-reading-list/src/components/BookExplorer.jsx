import { Filters } from './Filters'
import { Tabs } from './Tabs'
import { Book } from './Book'
import { useFilters } from '../hooks/useFilters'
import './styles/BookExplorer.css'

export function BookExplorer () {
  const { filterList } = useFilters()

  console.log(filterList)

  return (
    <>
      <Filters />
      <div className='explorer'>
        <Tabs />

        <div className='bookList'>
          {
            filterList.length === 0
              ? ''
              : filterList.map(bk => (
                <Book key={bk.book.ISBN} props={bk.book} />
              ))
          }
        </div>

      </div>
    </>
  )
}
