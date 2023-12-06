import styles from './page.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DataNav from '../../components/DataNav'

export default function omData() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}> <DataNav/> </div>
      <div className={styles.text}>
<h2>Synkronisér highlights</h2>
<p>Klik på et datapunkt i et plot, og det vil blive fremhævet. Denne markering spejles på relevante plots, så du kan sammenligne og forstå data på tværs af visualiseringer</p>
<br />
<h2>Fjern synkroniseringen</h2>
<p>Klik på "Slet valg" i topmenuen. Hvis dette ikke virker, så opdatér siden ved at trykke på F5 eller på din browsers opdateringsknap</p>
      </div>
      <Footer/>
    </main>
  )
}
