import { Filters } from "./Filters"
import './styles/BookExplorer.css'

export function BookExplorer () {

  return (
    <>
      <Filters />
      <div className="explorer">
        <div className="tabs">
          <p>Books available (0)</p>
          <p>Reading list (0)</p>
        </div>
      </div>
    </>
  )
}