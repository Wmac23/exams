"use client"
import styles from './page.module.css'
import RejsekortNav from '@/app/components/RejsekortNav'


export default function RejsekortData() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div className={styles.text}>
          <h1>Rejsekort</h1>
          <h2 >Om data - Rejsekortdata</h2>
          <br/>
          <p>Trafikstyrelsen modtager data på rejsekortrejser månedligt, og data opdateres i udgangspunktet af hver måned.</p>
          <br />
          <h3>Definationer</h3>
          <p>Rejse: En persons transport fra start til slut, uanset skift.</p>
          <p>Cykler og hunde indgår ikke i opgørelserne.</p>
          <br />
          <p>Tværgående rejse: Rejse som foregår mellem takstområder.</p>
          <p>Danmark er opdelt i 6 takstområder:</p>
          <ul>
            <li>Hovedstadsområdet</li>
            <li>Øverige Sjælland</li>
            <li>Fyn</li>
            <li>Nordjylland</li>
            <li>Midtjylland</li>
            <li>Sydjylland</li>
          </ul>
      </div>
    </main>
  )
}