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
        <h2>Henvisninger</h2>
        <p>Nedenfor finder du henvisninger til forskellige rapporter fra Trafikstyrelsen om udvikling i den kollektive trafik.</p>
        <br />
       <h2>Sektorrapport</h2>
        <p>Organisering og udvikling i den kollektive trafik.</p>
        <button>Download</button>
       <br />
       <h2>Trafikplanen</h2>
       <p>Trafikplanen giver overblik over rammerne for den statslige togtrafik.</p>
       <button>Download</button>
       <br />
       <h2>Statistik for ikke-statslige jernbaner</h2>
       <p>Trafikselskaberne indberetter årligt data vedrørende ikke-statslige jernbanestrækninger til Trafikstyrelsen.</p>
       <button>Download</button>
       <br />
       <h2>Offentlig bustrafik</h2>
       <p>Trafikselskaberne indberetter årligt data til Trafikstyrelsen.</p>
       <button>Download</button>
       <br />
       <h2>Sikkerhedsrapport for jernbaneområdet</h2>
       <p>Trafikstyrelsen udarbejder årligt en sikkerhedsrapport samt faktaark for jernbaneområdet</p>
       <button>Download</button>
      </div>
      <Footer/>
    </main>
  )
}