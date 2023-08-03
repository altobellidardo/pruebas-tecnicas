import './styles/Book.css'

export function Book ({ props, modify }) {
  const handleBookClick = (event) => {
    modify(props.ISBN, 'add')
  }

  return (
    <div className='book'>
      <div className='title'>
        <p>{props.title}</p>
        <button onClick={handleBookClick}>
          <i className='bi bi-bookmark-x-fill' id={props.ISBN}> </i>
          {/* {
            readList.includes(props.ISBN)
              ? <i className='bi bi-bookmark-x-fill' id={props.ISBN}> </i>
              : <i className='bi bi-bookmark-plus-fill' id={props.ISBN}> </i>
          } */}
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
