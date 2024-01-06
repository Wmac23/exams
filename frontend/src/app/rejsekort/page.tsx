'use client'
import styles from './page.module.css'
import RejsekortNav from '@/app/components/RejsekortNav'
import TotalChart from '@/app/components/barcharts/total-rejsekortrejser'
import WeekChart from '@/app/components/barcharts/week-rejsekortrejser'
import ZoneChart from '@/app/components/barcharts/zones-rejsekortrejser'
import MonthChart from '@/app/components/linecharts/month-rejsekortrejser'
import { Help } from '../components/help'

export default function Rejsekort () {
  return (
    <main className={styles.main}>
      <div><RejsekortNav/></div>
        <div>
        <h1>Rejsekort</h1>
        <Help/>
          <h2 className={styles.text}>Rejsekortrejser</h2>
          <div className={styles.charts}>
            <TotalChart/>
            <WeekChart/>
            <MonthChart/>
            <ZoneChart/> 
          </div>
      </div>
    </main>
  )
}