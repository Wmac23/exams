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
        <div className={styles.text}>
          <h1 >Om data</h1>
          <br/>
          <h2>Rejsekortdata</h2>
          <p>Trafikstyrelsen modtager data på rejsekortrejser månedligt, og data opdateres i udgangspunktet af hver måned.</p>
          <br /> <br />
          <h3>Definationer</h3>
          <p>Rejse: En persons transport fra start til slut, uanset skift.</p>
          <br />
          <p>Cykler og hunde indgår ikke i opgørelserne.</p>
          <br /> <br />
          <p>Tværgående rejse: Rejse som foregår mellem takstområder.</p>
          <br />
          <p>Danmark er opdelt i 6 takstområder:</p>
          <br />
          <ul>
            <li>Hovedstadsområdet</li>
            <li>Øverige Sjælland</li>
            <li>Fyn</li>
            <li>Nordjylland</li>
            <li>Midtjylland</li>
            <li>Sydjylland</li>
          </ul>
      </div>
      <Tooltip/>
    </main>
  )
}