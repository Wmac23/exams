'use client'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import RejsekortNav from '@/app/components/RejsekortNav'
import { Tooltip } from '@/app/components/tooltip'
import { Help } from '@/app/components/help'
import ZoneChart2 from '@/app/components/piecharts/zones-rejsekortindtægter'
import MoneyChart from '@/app/components/barcharts/money-rejsekortindtægter'
import MonthChart2 from '@/app/components/linecharts/months-rejsekortindtægter'


export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Rejsekortindtægter</h1>
          
          <div className={styles.charts}>
          <ZoneChart2/>
          <MoneyChart/>
          <MonthChart2/>
          </div>
          <Help/>
          <Tooltip/>
      </div>
     
    </main>
  )
}