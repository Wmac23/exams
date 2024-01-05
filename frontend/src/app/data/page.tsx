'use client'
import styles from './page.module.css'
import Navbar from '../components/Navbar'
import DataNav from '../components/DataNav'
import { Tooltip } from '../components/tooltip'

export default function omData() {
  return (
    <main className={styles.main}>
      <Navbar />
      <DataNav/>
      <div className={styles.text}>
        <h1>Om data</h1>
        <br />
        <h2>Datakvalitet</h2>
        <p>Trafikstyrelsen arbejder løbende på at forbedre kvaliteten af vores data, der er baseret på rapporteringer fra de respektive operatører, trafikselskaber, infrastrukturforvaltere og godsoperatører.
         <br/>
         Dette kan betyde at nogle data kan været ændret i forhold til tidligere publicerede data. Endvidere gøres der opmærksom på, at data kan afvige fra anden statistik grundet opgørelsesmetoder, kilder mv.</p>
        <br />
        <p>Trafikstyrelsen eller anden dataleverandør, har ikke økonomisk ansvar for brugerens eventuelle direkte eller indirekte skader eller tab, herunder mistet fortjenelse hos brugeren, eller for skader eller tab opstået hos brugerens eventuelle medkontrahenter som følge af fejl i statistikken eller fejl, som er opstået ved bearbejding af statistikken.</p>
        <Tooltip/>
      </div>  
    </main>
  )
}
