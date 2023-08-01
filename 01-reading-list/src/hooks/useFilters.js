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

  const filterList = (filt) => (
    books.filter(bk => (
      (filt.genre === 'all' || bk.book.genre === filt.genre) &&
      (bk.book.pages <= filt.pages) &&
      (filt.title === '' || bk.book.title.toLowerCase().includes(filt.title.toLowerCase()))
    ))
  )

  const filteredList = filterList(initialFilters)

  return { filters, filteredList, setFilters }
}
