import { actionsRL, posterStates } from '../logic/constants'
import './styles/Book.css'

export function Book ({ props, modify, mode }) {
  const handleBookClick = () => {
    if (mode === posterStates.available) modify(props.ISBN, actionsRL.add)
    else modify(props.ISBN, actionsRL.delete)
  }

  const changePos = (direction) => {
    if (direction === 'up') modify(props.ISBN, actionsRL.up)
    else if (direction === 'dw') modify(props.ISBN, actionsRL.down)
  }

  const viewArrow = (arrowType) => {
    const { index, lastIndex } = modify(props.ISBN, actionsRL.knowIndex)

    if (
      (arrowType === 'up' && index === 0) ||
      (arrowType === 'dw' && index === lastIndex)
    ) return 'disable'
    else return 'enable'
  }

  return (
    <div className='book'>
      <div className='title'>
        <p>{props.title}</p>
        {mode === posterStates.readlist
          ? (
            <div className='changePos'>
              <button onClick={() => changePos('up')}>
                <i className='bi bi-arrow-up-square-fill' id={viewArrow('up')} />
              </button>
              <button onClick={() => changePos('dw')}>
                <i className='bi bi-arrow-down-square-fill' id={viewArrow('dw')} />
              </button>
            </div>
            )
          : ''}
        <button onClick={handleBookClick}>
          {mode === posterStates.available
            ? <i className='bi bi-bookmark-plus-fill' />
            : <i className='bi bi-bookmark-x-fill' />}
        </button>
      </div>
      <img src={props.cover} alt={props.title} />
      <div className='info'>
        <p>{props.author.name}</p>
        <p>{props.year}</p>
        <p>{props.pages} pages</p>
        <p>{props.genre}</p>
      </div>
    </div>
  )
}
