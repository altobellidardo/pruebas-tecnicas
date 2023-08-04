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
      listOfBooks.filter(({ book }) => (
        (filters.genre === 'all' || book.genre === filters.genre) &&
        (book.pages <= filters.pages) &&
        (filters.title === '' || book.title.toLowerCase().includes(filters.title.toLowerCase()))
      ))
    )
  }

  function modifyLists (bookISBN, action) {
    if (action === actionsRL.add) {
      const selectBook = avaiBooks.filter(({ book }) => book.ISBN === bookISBN)[0]

      if (selectBook) {
        setReadList((prevState) => prevState.concat(selectBook))

        const cleanAvaiBooks = avaiBooks.filter(({ book }) => book.ISBN !== bookISBN)
        setAvaiBooks(cleanAvaiBooks)
      }
    } else if (action === actionsRL.delete) {
      const selectBook = readList.filter(({ book }) => book.ISBN === bookISBN)[0]

      if (selectBook) {
        const cleanRL = readList.filter(({ book }) => book.ISBN !== bookISBN)
        setReadList(cleanRL)

        setAvaiBooks((prevState) => prevState.concat(selectBook))
      }
    } else if (action === actionsRL.deleteAll) {
      const blockBooks = readList.slice()
      setAvaiBooks(avaiBooks.concat(blockBooks))

      setReadList([])
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
