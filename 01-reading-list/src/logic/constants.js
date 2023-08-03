import dbData from '../../db/books2.json'

const COMPANY_NAME = 'Bookverse'
const COMPANY_SLOGAN = 'Explore words, live stories'

export const COMPANY = { COMPANY_NAME, COMPANY_SLOGAN }

export const booksDb = dbData.library

export const initialFilters = {
  title: '',
  pages: 1200,
  genre: 'all'
}

export const genreOptions = {
  all: { view: 'All', option: 'all' },
  Fantasy: { view: 'Fantasy', option: 'Fantasía' },
  ScienceFiction: { view: 'Ciencia ficción', option: 'Science fiction' },
  Zombies: { view: 'Zombies', option: 'Zombies' },
  Terror: { view: 'Terror', option: 'Terror' }
}

export const actionsRL = {
  add: 'add',
  remove: 'remove'
}
