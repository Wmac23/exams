import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import RejsekortNav from '@/app/components/RejsekortNav'

export default function Luftfart() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.sidebar}><RejsekortNav/></div>
        <div>
          <h1 className={styles.text}>Fordeling af rejsekortrejser</h1>
      </div>
      <Footer/>
    </main>
  )
}