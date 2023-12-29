'use client'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Tooltip } from '@/app/components/tooltip'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Rejsekortrejser</h1>
      </div>
      <Tooltip/>
    </main>
  )
}