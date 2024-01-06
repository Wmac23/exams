'use client'
import styles from './page.module.css'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Help } from '@/app/components/help'
import ZoneChart2 from '@/app/components/piecharts/zones-rejsekortindtægter'
import MoneyChart from '@/app/components/barcharts/money-rejsekortindtægter'
import MonthChart2 from '@/app/components/linecharts/months-rejsekortindtægter'


export default function Indtaegter() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          
        <h1>Rejsekort</h1>
        <Help/>
          <h2 className={styles.text}>Rejsekortindtægter</h2>
          <div className={styles.charts}>
          <ZoneChart2/>
          <MoneyChart/>
          <MonthChart2/>
          </div>
          
      </div>
     
    </main>
  )
}