'use client'
import styles from './page.module.css'

export default function Busser() {
  return (
    <main className={styles.main}>
        <div>
          <h1 className={styles.text}>Busser</h1>
        <button><img src="bus-station.png" alt="Icon for public busses"/><br/><p>Offentlige busser</p><h2>240 mio.</h2><p>Påstigere 2022</p></button>
        <button><img src="bus-far.png" alt="Icon for busses that drives far distances"/><br/><p>Fjernbusser</p><h2>1,40 mio</h2><p>Påstigere 2022</p></button>
      </div>
    </main>
  )
}
