const Card = ({id, title, body}) => {
  return (
    <>
        <div className="card">
            <div className="card__title-container">
                <h2>{title}</h2>
            </div>
            <div className="card__body-container">
                <p>{body}</p>
            </div>
        </div>
    </>
  )
}

export default Card