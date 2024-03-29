'use client'
import styles from './page.module.css'
import DataNav from '../../components/DataNav'

export default function Henvisninger() {
  return (
  
    <main className={styles.main}>
      <DataNav/>
      <div className={styles.text}>
        <h1>Om data</h1>
        <h2>Henvisninger</h2>
        <p>Nedenfor finder du henvisninger til forskellige rapporter fra Trafikstyrelsen om udvikling i den kollektive trafik.</p>
        <br />
       <li><h3>Sektorrapport</h3>
        <p>Organisering og udvikling i den kollektive trafik.</p>
        <button>Download</button></li>
       <br />
       <li> <h3>Trafikplanen</h3>
       <p>Trafikplanen giver overblik over rammerne for den statslige togtrafik.</p>
       <button>Download</button></li>
       <br />
       <li><h3>Statistik for ikke-statslige jernbaner</h3>
       <p>Trafikselskaberne indberetter årligt data vedrørende ikke-statslige jernbanestrækninger til Trafikstyrelsen.</p>
       <button>Download</button></li>
       <br />
       <li><h3>Offentlig bustrafik</h3>
       <p>Trafikselskaberne indberetter årligt data til Trafikstyrelsen.</p>
       <button>Download</button></li>
       <br />
       <li><h3>Sikkerhedsrapport for jernbaneområdet</h3>
       <p>Trafikstyrelsen udarbejder årligt en sikkerhedsrapport samt faktaark for jernbaneområdet</p>
       <button>Download</button></li>
      </div>
      
    </main>
  )
}