'use client'
import styles from './page.module.css'
import Navbar from '../../components/Navbar'
import DataNav from '../../components/DataNav'
import { Tooltip } from '@/app/components/tooltip'

export default function omData() {
  return (
  
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}> <DataNav/> </div>
      <div className={styles.text}>
        <h2>Henvisninger</h2>
        <p>Nedenfor finder du henvisninger til forskellige rapporter fra Trafikstyrelsen om udvikling i den kollektive trafik.</p>
        <br />
       <h3>Sektorrapport</h3>
        <p>Organisering og udvikling i den kollektive trafik.</p>
        <button>Download</button>
       <br />
       <h3>Trafikplanen</h3>
       <p>Trafikplanen giver overblik over rammerne for den statslige togtrafik.</p>
       <button>Download</button>
       <br />
       <h3>Statistik for ikke-statslige jernbaner</h3>
       <p>Trafikselskaberne indberetter årligt data vedrørende ikke-statslige jernbanestrækninger til Trafikstyrelsen.</p>
       <button>Download</button>
       <br />
       <h3>Offentlig bustrafik</h3>
       <p>Trafikselskaberne indberetter årligt data til Trafikstyrelsen.</p>
       <button>Download</button>
       <br />
       <h3>Sikkerhedsrapport for jernbaneområdet</h3>
       <p>Trafikstyrelsen udarbejder årligt en sikkerhedsrapport samt faktaark for jernbaneområdet</p>
       <button>Download</button>
      </div>
      <Tooltip/>
    </main>
  )
}