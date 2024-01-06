'use client'
import styles from './page.module.css'

export default function Luftfart() {
  return (
    <main className={styles.main}>
        <div>
          <h1 className={styles.text}>Luftfart</h1>
        <button className={styles.buttons}><img src="airport-sm.png" alt=""/><br/><h4>Små flyvepladser</h4></button>
        <button className={styles.buttons}><img src="airport.png" alt=""/><br/><h4>Større danske lufthavne</h4></button>
      </div>
    </main>
  )
}