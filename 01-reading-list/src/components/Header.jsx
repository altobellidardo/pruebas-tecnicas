import { COMPANY } from '../logic/constants'
import './styles/Header.css'

export function Header () {
  return (
    <header>
      <h1>{COMPANY.COMPANY_NAME}</h1>
      <h3>{COMPANY.COMPANY_SLOGAN}</h3>
    </header>
  )
}
