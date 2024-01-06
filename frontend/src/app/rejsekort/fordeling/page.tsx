'use client'
import styles from './page.module.css'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Help } from '@/app/components/help'
import TotalChart2 from '@/app/components/barcharts/total-fordeling'
import TotalChart3 from '@/app/components/piecharts/cardtype-fordeling'
import HourChart from '@/app/components/linecharts/hour-fordeling'

export default function Fordeling() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
        <h1>Rejsekort</h1>
        <Help/>
          <h2 className={styles.text}>Fordeling af rejsekortrejser</h2>
          <div className={styles.charts}>
          <TotalChart2/>
          <TotalChart3/>
          <HourChart/>
          </div>
          
      </div>
      
    </main>
  )
}