import './styles/Book.css'

export function Book ({ props }) {
  return (
    <div className='book'>
      <div className='title'>
        <p>{props.title}</p>
        <button>
          <i className='bi bi-plus-circle-fill'> </i>
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
