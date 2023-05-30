import styles from './page.module.css';
import Nav from '../shared/nav';
import Footer from '../shared/footer';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <Nav />
      <div>
      <h1>Still in development...</h1>
      <img src="surprised.png" alt="" />
      </div>
      <Footer/>
    </main>
  )
}