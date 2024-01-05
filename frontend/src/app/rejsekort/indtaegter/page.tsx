'use client'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Tooltip } from '@/app/components/tooltip'
import { Help } from '@/app/components/help'


export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Rejsekortindtægter</h1>
          <Help/>
      </div>
      <Tooltip/>
    </main>
  )
}