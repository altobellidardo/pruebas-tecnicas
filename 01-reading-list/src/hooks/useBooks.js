import { useEffect, useState } from 'react'
import { booksDb, initialFilters, actionsRL } from '../logic/constants'

export function useBooks () {
  const [filters, setFilters] = useState(initialFilters)

  const [avaiBooks, setAvaiBooks] = useState(booksDb)
  const [filtBooks, setFiltBooks] = useState(doFilterBooks(booksDb))
  const [readList, setReadList] = useState([])
  const [filtList, setFiltList] = useState([])

  function doFilterBooks (listOfBooks) {
    return (
      listOfBooks.filter((bk) => (
        (filters.genre === 'all' || bk.book.genre === filters.genre) &&
        (bk.book.pages <= filters.pages) &&
        (filters.title === '' || bk.book.title.toLowerCase().includes(filters.title.toLowerCase()))
      ))
    )
  }

  function modifyLists (bookISBN, action) {
    if (action === actionsRL.add) {
      const selectBook = avaiBooks.filter((bk) => bk.book.ISBN === bookISBN)[0]

      if (selectBook) {
        setReadList((prevState) => prevState.concat(selectBook))

        const cleanAvaiBooks = avaiBooks.filter((bk) => bk.book.ISBN !== bookISBN)
        setAvaiBooks(cleanAvaiBooks)
      }
    } else if (action === actionsRL.delete) {
      const selectBook = readList.filter((bk) => bk.book.ISBN === bookISBN)[0]

      if (selectBook) {
        const cleanRL = readList.filter((bk) => bk.book.ISBN !== bookISBN)
        setReadList(cleanRL)

        setAvaiBooks((prevState) => prevState.concat(selectBook))
      }
    }
  }

  useEffect(() => {
    setFiltBooks(doFilterBooks(avaiBooks))
  }, [avaiBooks, filters])

  useEffect(() => {
    setFiltList(doFilterBooks(readList))
  }, [readList, filters])

  return {
    filters,
    setFilters,
    avaiBooks,
    filtBooks,
    readList,
    filtList,
    modifyLists
  }
}
