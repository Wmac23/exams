import { NextPage } from "next";
import Nav from "../shared/nav";
import Footer from "../shared/footer";
import styles from './page.module.css'

const Mypokemon: NextPage = () => {
    return (
        <main className={styles.main}>
        <Nav />
        <div>
<img src="choose.png" alt="" />
        </div>
        <Footer/>
      </main>)
    
};

export default Mypokemon;