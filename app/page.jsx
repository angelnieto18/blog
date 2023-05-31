import Link from 'next/link'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()

  return json
}

const Home = async () => {
  const data = await getData()
  
  return (
    <>
      <main>
        {data.map((post) => (
          <Link href={`./post/${post.id}`} className='card'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </Link>
        ))}
      </main>
    </>
  );
      }

export default Home
