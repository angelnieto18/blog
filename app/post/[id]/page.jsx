import Card from "@/app/components/Card/Card"

const getData = async (params) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return post
}

const Post = async ({params}) => {

  const post = await getData(params)

    return (
      <>
        <Card title={post.title} body={post.body}/>
      </>
    )
  }
  
  export default Post