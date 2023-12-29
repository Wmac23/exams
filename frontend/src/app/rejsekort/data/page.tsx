"use client"
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import { Tooltip } from '@/app/components/tooltip'
import RejsekortNav from '@/app/components/RejsekortNav'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Om data</h1>
      </div>
      <Tooltip/>
    </main>
  )
}