import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        <h1 className={styles.text}>Velkommen til Passagertal.dk</h1>
        <p className={styles.text}>Hvor mange busrejser foretages? Hvor flyver vi hen? Og på hvilke tidspunkter er der flest, der tjekker ind med Rejsekortet?</p>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Luftfart </button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Jernbaner</button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Busser</button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/>Rejsekort</button>
      </div>
      <Footer/>
    </main>
  )
}
