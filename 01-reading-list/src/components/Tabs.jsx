import './styles/Tabs.css'

export function Tabs ({ tabProps, avaiQty, rlQty }) {
  const { active, change } = tabProps

  return (
    <ul className='tabs'>
      <li>
        <button
          onClick={() => change(1)}
          className={
            active === 1 ? 'active' : ''
          }
        >
          Books available ({avaiQty})
        </button>
      </li>

      <li>
        <button
          onClick={() => change(2)}
          className={
            active === 2 ? 'active' : ''
          }
        >
          Reading list ({rlQty})
        </button>
      </li>
    </ul>
  )
}
