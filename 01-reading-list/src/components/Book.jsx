import './styles/Book.css'

export function Book ({ props, readList, setReadList }) {
  const handleBookClick = (event) => {
    setReadList(prevState => [
      ...prevState,
      event.target.id
    ])
    console.log(readList) // delete later
  }

  return (
    <div className='book'>
      <div className='title'>
        <p>{props.title}</p>
        <button onClick={handleBookClick}>
          <i className='bi bi-plus-circle-fill' id={props.ISBN}> </i>
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
