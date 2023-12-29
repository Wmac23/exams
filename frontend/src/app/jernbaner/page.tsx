'use client'
import styles from './page.module.css'
import Navbar from '../components/Navbar'
import { Tooltip } from '../components/tooltip'

export default function Jernbaner() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div >
      <h1 className={styles.text}>Jernbaner</h1>
      <ul >
      <button><img src="passenger.png" alt="Icon for passengers"/><br/><h4>Påstigere</h4></button>
      <button><img src="railway.png" alt="Icon for a railway"/><br/><h4>Ikke-statslige jernbaner</h4></button>
      <button><img src="railway-station.png" alt="Icon for a railway station"/><br/><h4>Stationskatalog</h4></button>
      <button><img src="map.png" alt="Icon for a map"/><br/><h4>OD for statsbanen, kort</h4></button>
      <button><img src="tablet.png" alt="Icon for a table/graph"/><br/><h4>OD for statsbanen, tabel</h4></button>
      </ul>
      </div>
      <Tooltip/>
    </main>
  )
}