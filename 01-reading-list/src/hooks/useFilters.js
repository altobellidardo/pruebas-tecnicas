import { useState } from 'react'
import dbData from '../../db/books.json'

const books = dbData.library

const initialFilters = {
  title: '',
  pages: 1200,
  genre: 'Terror'
}

export function useFilters () {
  const [filters, setFilters] = useState(initialFilters)

  const filterList = books.filter(bk => (
    filters.category === 'all' || bk.book.category === filters.category
  ))

  return { filters, filterList, setFilters }
}
