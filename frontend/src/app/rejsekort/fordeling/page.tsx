'use client'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import { Tooltip } from '@/app/components/tooltip'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Help } from '@/app/components/help'
import TotalChart2 from '@/app/components/barcharts/total-fordeling'
import TotalChart3 from '@/app/components/piecharts/cardtype-fordeling'
import HourChart from '@/app/components/linecharts/hour-fordeling'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Fordeling af rejsekortrejser</h1>
          <TotalChart2/>
          <TotalChart3/>
          <HourChart/>
          <Help/>
      </div>
      <Tooltip/>
      
    </main>
  )
}