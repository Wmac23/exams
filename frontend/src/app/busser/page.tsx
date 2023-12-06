import styles from './page.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Busser() {
  return (
    <main className={styles.main}>
      <Navbar />
        <div>
          <h1 className={styles.text}>Busser</h1>
        <button><img src="favicon.ico" alt=""/><br/><h4>Offentlige busser</h4><h2>240 mio.</h2><p>Påstigere 2022</p></button>
        <button><img src="favicon.ico" alt=""/><br/><h4>Fjernbusser</h4><h2>1,40 mio</h2><p>Påstigere 2022</p></button>
      </div>
      <Footer/>
    </main>
  )
}
