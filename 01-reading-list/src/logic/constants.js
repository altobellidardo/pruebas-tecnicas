import dbData from '../../db/books2.json'

const COMPANY_NAME = 'Bookverse'
const COMPANY_SLOGAN = 'Explore words, live stories'

export const COMPANY = { COMPANY_NAME, COMPANY_SLOGAN }

export const booksDb = dbData.library

export const initialFilters = {
  title: '',
  pages: 1500,
  genre: 'all'
}

export const actionsRL = {
  add: 'add',
  delete: 'delete',
  deleteAll: 'deleteAll'
}
