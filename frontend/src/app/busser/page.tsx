'use client'
import styles from './page.module.css'
import Navbar from '../components/Navbar'
import { Tooltip } from '../components/tooltip'

export default function Busser() {
  return (
    <main className={styles.main}>
      <Navbar />
        <div>
          <h1 className={styles.text}>Busser</h1>
        <button><img src="bus-station.png" alt="Icon for public busses"/><br/><h4>Offentlige busser</h4><h2>240 mio.</h2><p>Påstigere 2022</p></button>
        <button><img src="bus-far.png" alt="Icon for busses that drives far distances"/><br/><h4>Fjernbusser</h4><h2>1,40 mio</h2><p>Påstigere 2022</p></button>
        <Tooltip/>
      </div>
    </main>
  )
}
