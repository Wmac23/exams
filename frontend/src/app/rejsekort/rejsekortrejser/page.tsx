'use client'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Tooltip } from '@/app/components/tooltip'
import { Help } from '@/app/components/help'
import TotalChart from '@/app/components/barcharts/total-rejsekortrejser'
import WeekChart from '@/app/components/barcharts/week-rejsekortrejser'
import ZoneChart from '@/app/components/barcharts/zones-rejsekortrejser'
import MonthChart from '@/app/components/linecharts/month-rejsekortrejser'



export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Rejsekortrejser</h1>
          <TotalChart/>
          <WeekChart/>
          <MonthChart/>
          <ZoneChart/>
          <Help/>
      </div>
      <Tooltip/>
    </main>
  )
}