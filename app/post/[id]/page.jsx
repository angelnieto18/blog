const getData = async (params) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return post
}

const Post = async ({params}) => {

  const post = await getData(params)

    return (
      <>
        <h2>{`Post #${params.id}`}</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </>
    )
  }
  
  export default Post