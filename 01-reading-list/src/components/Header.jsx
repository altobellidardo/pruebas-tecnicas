import './styles/Header.css'

const COMPANY_NAME = 'Bookverse'
const COMPANY_SLOGAN = 'Explore words, live stories'

export function Header () {

  return (
    <header>
      <h1>{COMPANY_NAME}</h1>
      <h3>{COMPANY_SLOGAN}</h3>
    </header>
  )
}