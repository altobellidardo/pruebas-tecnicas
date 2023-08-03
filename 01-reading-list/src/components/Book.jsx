import './styles/Book.css'

export function Book ({ props, readList }) {
  const handleBookClick = (event) => {
    console.log(readList)
  }

  return (
    <div className='book'>
      <div className='title'>
        <p>{props.title}</p>
        <button onClick={handleBookClick}>
          {
            readList.includes(props.ISBN)
              ? <i class='bi bi-bookmark-x-fill' id={props.ISBN}> </i>
              : <i className='bi bi-bookmark-plus-fill' id={props.ISBN}> </i>
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
