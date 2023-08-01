import { useState } from 'react'
import dbData from '../../db/books.json'

const books = dbData.library

const initialFilters = {
  title: '',
  pages: 1200,
  genre: 'all'
}

export function useFilters () {
  const [filters, setFilters] = useState(initialFilters)

  const filterList = books.filter(bk => (
    filters.genre === 'all' || bk.book.genre === filters.genre
  ))

  return { filters, filterList, setFilters }
}
