import { useEffect, useState } from 'react'
import { booksDb, initialFilters, actionsRL } from '../logic/constants'

function doFilterBooks (listOfBooks, filters, sort) {
  const afterFilters = listOfBooks.filter(({ book }) => (
    (filters.genre === 'all' || book.genre === filters.genre) &&
    (book.pages <= filters.pages) &&
    (filters.title === '' || book.title.toLowerCase().includes(filters.title.toLowerCase()))
  ))

  return afterFilters
}

function doSort (listOfBooks) {
  const sortedBooks = listOfBooks.sort((a, b) => a.book.ISBN.localeCompare(b.book.ISBN))
  return sortedBooks
}

export function useBooks () {
  const [filters, setFilters] = useState(initialFilters)

  const [avaiBooks, setAvaiBooks] = useState(booksDb)
  const [filtBooks, setFiltBooks] = useState(booksDb)

  const [readList, setReadList] = useState([])
  const [filtList, setFiltList] = useState([])

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
    } else if (action === actionsRL.knowIndex) {
      const index = readList.findIndex(({ book }) => book.ISBN === bookISBN)

      return { index, lastIndex: readList.length - 1 }
    } else if (action === actionsRL.up) {
      const { index } = modifyLists(bookISBN, actionsRL.knowIndex)

      if (index === -1) {
        return readList
      }

      const readListCopy = [...readList]

      if (index > 0) {
        [readListCopy[index], readListCopy[index - 1]] = [readListCopy[index - 1], readListCopy[index]]
      }

      setReadList(readListCopy)
    } else if (action === actionsRL.down) {
      const { index, lastIndex } = modifyLists(bookISBN, actionsRL.knowIndex)

      if (index === -1) {
        return readList
      }

      const readListCopy = [...readList]

      if (index < lastIndex) {
        [readListCopy[index], readListCopy[index + 1]] = [readListCopy[index + 1], readListCopy[index]]
      }

      setReadList(readListCopy)
    }
  }

  useEffect(() => {
    setFiltBooks(
      doSort(doFilterBooks(avaiBooks, filters))
    )
  }, [avaiBooks, filters])

  useEffect(() => {
    setFiltList(doFilterBooks(readList, filters, false))
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
