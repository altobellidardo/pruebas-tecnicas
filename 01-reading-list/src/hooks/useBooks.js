import { useEffect, useState } from 'react'
import { booksDb, initialFilters, actionsRL } from '../logic/constants'

export function useBooks () {
  const [filters, setFilters] = useState(initialFilters)

  const [avaiBooks, setAvaiBooks] = useState(booksDb)
  const [filtBooks, setFiltBooks] = useState(doFilterBooks(booksDb))
  const [readList, setReadList] = useState([])

  function doFilterBooks (listOfBooks) {
    return (
      listOfBooks.filter((bk) => (
        filters.genre === 'all' || bk.book.genre === filters.genre
      ))
    )
  }

  function modifyLists (bookISBN, action) { // funcion para modificar readList y a su vez availableBooks
    if (action === actionsRL.add) {
      const selectBook = avaiBooks.filter((bk) => bk.book.ISBN === bookISBN)

      if (selectBook) {
        // agregarlo a readList
        setReadList((prevState) => [
          ...prevState,
          selectBook
        ])

        // eliminarlo de available
        const cleanAvaiBooks = avaiBooks.filter((bk) => bk.book.ISBN !== bookISBN)
        setAvaiBooks(cleanAvaiBooks)
      }
    }

    // else if (action === actionsRL.remove) {
    //   const cleanRL = avaiBooks.filter((bk) => bk.book.ISBN !== bookISBN)
    //   setReadList(cleanRL)
    // }
  }

  useEffect(() => {
    setFiltBooks(doFilterBooks(avaiBooks))
  }, [avaiBooks, filters])

  return { avaiBooks, filtBooks, filters, setFilters, readList, modifyLists }
}

// export function useBooks () {
//   const [filters, setFilters] = useState(initialFilters) // filtros que re-renderizan

//   // const avaiBooks = useRef(booksDb)
//   const [avaiBooks, setAvaiBooks] = useState(booksDb) // Iniciamos con todos los libros disponibles
//   const [filtBooks, setFiltBooks] = useState([]) // Libros filtrados

//   // const readList = useRef([])
//   const [readList, setReadList] = useState([]) // readList vacia
//   const [filtRL, setRL] = useState([])

//   // nooooo readlist tambien se tendria que filtrar capaz si uso useref en avai y readlist

//   function filterAvaiBooks (listOfBooks) {
//     return (
//       listOfBooks.filter((bk) => (
//         (filters.genre === 'all' || bk.book.genre === filters.genre) &&
//         (bk.book.pages <= filters.pages) &&
//         (filters.title === '' || bk.book.title.toLowerCase().includes(filters.title.toLowerCase()))
//       ))
//     )
//   }

//   useEffect(() => {
//     setFiltBooks(filterAvaiBooks(avaiBooks))
//   }, [filters, avaiBooks])

//   return { filters, setFilters, avaiBooks, setAvaiBooks, readList, setReadList, filtBooks }
// }

// export function modifyRL (bookISBN, action) { // funcion para modificar readList y a su vez availableBooks
//   if (action === actionsRL.add) {
//     const selectBook = avaiBooks.filter((bk) => bk.book.ISBN === bookISBN)

//     if (selectBook) {
//       // agregarlo a readList
//       setReadList((prevState) => [
//         ...prevState,
//         selectBook
//       ])

//       // eliminarlo de available
//       const cleanAvaiBooks = avaiBooks.filter((bk) => bk.book.ISBN !== bookISBN)
//       setAvaiBooks(cleanAvaiBooks)
//     }
//   } else if (action === actionsRL.remove) {
//     const cleanRL = avaiBooks.filter((bk) => bk.book.ISBN !== bookISBN)
//     setReadList(cleanRL)
//   }
// }

// return { filters, setFilters, filtBooks, readList, setReadList }

// const filterList = () => (
//   booksDb.filter(bk => (
//     (filters.genre === 'all' || bk.book.genre === filters.genre) &&
//     (bk.book.pages <= filters.pages) &&
//     (filters.title === '' || bk.book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
//     (
//       (filters.readListActive && readList.includes(bk.book.ISBN)) ||
//       (!filters.readListActive && !readList.includes(bk.book.ISBN))
//     )
//   ))
// )

// useEffect(() => {
//   setFiltBooks(filterList())
// }, [filters, readList])
