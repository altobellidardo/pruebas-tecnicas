import { NoBooks } from './NoBooks'
import { Book } from './Book'

export function ReadingList ({ books, readList, setReadList }) {
  return (
    <div className='bookList'>
      {
        books.length === 0
          ? <NoBooks />
          : books.map(bk => (
            <Book key={bk.book.ISBN} props={bk.book} readList={readList} setReadList={setReadList} />
          ))
      }
    </div>
  )
}
