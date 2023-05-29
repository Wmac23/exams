import styles from './page.module.css';
import Nav from '../shared/nav';
import Footer from '../shared/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <script type='module' src='/firebase'></script>
      <div>
      <img src="welcome.png" alt="" />
      <br />
     <img src="mypokemon.png" alt="" />
      </div>
      <img className={styles.logo} src="logo.png" alt="" />
      <div>
       <a href="/pokemonlist"><button className={styles.buttons}>See Pokémon</button></a> 
       <a href="/mypokemon"><button className={styles.buttons}>My Pokémon</button></a> 
      </div>
      <Footer/>
    </main>
  )
}