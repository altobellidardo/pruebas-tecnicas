import './styles/Tabs.css'

export function Tabs () {
  return (
    <ul className='tabs'>
      <li>
        <button className='active'>Books available (0)</button>
      </li>

      <li>
        <button>Reading list (0)</button>
      </li>
    </ul>
  )
}
