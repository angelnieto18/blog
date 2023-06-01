import Link from 'next/link'
import Card from './components/Card/Card'
import styles from './styles.module.css'
const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()

  return json
}

const Home = async () => {
  const data = await getData()
  
  return (
    <>
      <main className={styles.main}>
        {data.slice(0, 10).map((post) => (
          <Card id={post.id} title={post.title} body={post.body}/>
        ))}
      </main>
    </>
  );
      }

export default Home
