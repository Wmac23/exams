import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        <h1>Velkommen til Passagertal.dk</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <p>Hvor mange busrejser foretages? Hvor flyver vi hen? Og på hvilke tidspunkter er der flest, der tjekker ind med Rejsekortet?</p>
        <button className={styles.buttons}><img src="plane.png" alt="Icon of a plane"/><br/>Luftfart </button>
        <button className={styles.buttons}><img src="train.png" alt="Icon of a train"/><br/>Jernbaner</button>
        <button className={styles.buttons}><img src="bus.png" alt="Icon of a bus"/><br/>Busser</button>
        <button className={styles.buttons}><img src="card.png" alt="Icon of a card"/><br/>Rejsekort</button>
      </div>
      <Footer/>
    </main>
  )
}
