import { actionsRL } from '../logic/constants'
import './styles/Book.css'

export function Book ({ props, modify, mode }) {
  const handleBookClick = () => {
    if (mode === 'available') modify(props.ISBN, actionsRL.add)
    else modify(props.ISBN, actionsRL.delete)
  }

  return (
    <div className='book'>
      <div className='title'>
        <p>{props.title}</p>
        <button onClick={handleBookClick}>
          {
            mode === 'available'
              ? <i className='bi bi-bookmark-plus-fill'> </i>
              : <i className='bi bi-bookmark-x-fill'> </i>
          }
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
