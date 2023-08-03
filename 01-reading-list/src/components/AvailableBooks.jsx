import { NoBooks } from './NoBooks'
import { Book } from './Book'

export function AvailableBooks ({ books, readList, setReadList }) {
  return (
    <article className='bookList'>
      {
        books.length === 0
          ? <NoBooks />
          : books.map(bk => (
            <Book key={bk.book.ISBN} props={bk.book} readList={readList} setReadList={setReadList} />
          ))
      }
    </article>
  )
}
