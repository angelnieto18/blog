import styles from './styles.module.css'

const getData = async (params) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return post
}

const Post = async ({params}) => {

  const post = await getData(params)

    return (
      <>
        <div className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </>
    )
  }
  
  export default Post