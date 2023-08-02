import { useEffect, useState } from 'react'
import dbData from '../../db/books2.json'

const booksDb = dbData.library

const initialFilters = {
  title: '',
  pages: 1200,
  genre: 'all',
  readListActive: false
}

export function useBooks () {
  const [filters, setFilters] = useState(initialFilters)
  const [readList, setReadList] = useState([])

  const filterList = () => (
    booksDb.filter(bk => (
      (filters.genre === 'all' || bk.book.genre === filters.genre) &&
      (bk.book.pages <= filters.pages) &&
      (filters.title === '' || bk.book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (
        (filters.readListActive && readList.includes(bk.book.ISBN)) ||
        (!filters.readListActive && !readList.includes(bk.book.ISBN))
      )
    ))
  )

  const [filtBooks, setFiltBooks] = useState(booksDb)

  useEffect(() => {
    setFiltBooks(filterList())
  }, [filters, readList])

  return { filters, setFilters, filtBooks, readList, setReadList }
}
