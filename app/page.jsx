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
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </main>
    </>
  );
      }

export default Home
