import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Are you challanging me???</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}></main>
    </div>
  )
}
