"use client";

import { Auth } from "./components/auth";
import styles from './page.module.css'

function Home() {

  return (
  <main className={styles.main}>
  <div><Auth/></div>
</main>
)

}

export default Home;