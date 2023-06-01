import Link from "next/link"
import styles from "./styles.module.css"

const Card = ({id, title, body}) => {
  return (
    <>
      <Link className={styles.card} href={`./post/${id}`}>
        <div className="card__title-container">
          <h3>{title}</h3>
        </div>
        <hr className={styles.hr}></hr>
        <div className="card__body-container">
          <p>{body}</p>
        </div>
      </Link>
    </>
  )
}

export default Card