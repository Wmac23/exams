import styles from './page.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
        <div>
          <h1 className={styles.text}>Luftfart</h1>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>Små flyvepladser</h4></button>
        <button className={styles.buttons}><img src="favicon.ico" alt=""/><br/><h4>Større danske lufthavne</h4></button>
      </div>
      <Footer/>
    </main>
  )
}