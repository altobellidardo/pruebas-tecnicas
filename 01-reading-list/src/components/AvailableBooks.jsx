import { NoBooks } from './NoBooks'
import { Book } from './Book'

export function AvailableBooks ({ books, modify }) {
  return (
    <article className='bookList'>
      {
        books.length === 0
          ? <NoBooks />
          : books.map(bk => (
            <Book key={bk.book.ISBN} props={bk.book} modify={modify} />
          ))
      }
    </article>
  )
}
