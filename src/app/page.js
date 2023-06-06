'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [name, setName] = useState("Nitesh")
  const apple = (item) => {
    name !== "Nitesh" ? setName("Nitesh") : setName("Nancy")
  }

  return (
    <main className={styles.main}>
      <h1>{name}</h1>
      <button onClick={() => apple()}>I Love You</button>
    </main>
  )
}
