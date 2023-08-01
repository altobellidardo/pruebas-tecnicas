import { Filters } from './Filters'
import { Tabs } from './Tabs'
import dbData from '../../db/books.json'
import './styles/BookExplorer.css'

const books = dbData.library

export function BookExplorer () {
  return (
    <>
      <Filters />
      <div className='explorer'>
        <Tabs />

        <div className='bookList'>
          {
            books.map(bk => (
              <div className='book' key={bk.book.ISBN}>
                <div className='title'>
                  <p>{bk.book.title}</p>
                  <button>Add</button>
                </div>
                <img src={bk.book.cover} alt={bk.book.title} />
                <div className='info'>
                  <p>{bk.book.author.name}</p>
                  <p>{bk.book.year}</p>
                  <p>{bk.book.pages} pages</p>
                  <p>{bk.book.genre}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}
