'use client'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Velkommen til Passagertal.dk</h1>
        <p>Hvor mange busrejser foretages? Hvor flyver vi hen? Og på hvilke tidspunkter er der flest, der tjekker ind med Rejsekortet?</p>
        <a href="luftfart"><button className={styles.buttons}><img src="plane.png" alt="Icon of a plane"/><br/>Luftfart </button></a>
        <a href="jernbaner"><button className={styles.buttons}><img src="train.png" alt="Icon of a train"/><br/>Jernbaner</button></a>
        <a href="busser"><button className={styles.buttons}><img src="bus.png" alt="Icon of a bus"/><br/>Busser</button></a>
        <a href="rejsekort"><button className={styles.buttons}><img src="card.png" alt="Icon of a card"/><br/>Rejsekort</button></a>
        </div>
        
      </main>
      
  )
}

