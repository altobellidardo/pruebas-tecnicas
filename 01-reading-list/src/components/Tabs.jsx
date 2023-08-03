import { actionsRL } from '../logic/constants'
import './styles/Tabs.css'

export function Tabs ({ tabProps, avaiQty, rlQty, deleteRL }) {
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
      <li>
        <button
          className={rlQty ? 'deleteRL-enable' : 'deleteRL-disable'}
          onClick={() => deleteRL(null, actionsRL.deleteAll)}
        >
          Delete Reading list <i className='bi bi-trash3'> </i>
        </button>
      </li>
    </ul>
  )
}
