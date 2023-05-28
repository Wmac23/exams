import { NextPage } from "next";
import Nav from "../shared/nav";
import Footer from "../shared/footer";
import styles from './page.module.css'
import Layout from "../../../components/layout";

export default function PokemonList ( {pokemon} ) {
  console.log(pokemon);
    return (
        <main className={styles.main}>
        <Nav />
        <div>
<img src="choose.png" alt="" />
        
        <Layout title="NextJs Pokedex">
<h1 className="text-4xl mb-8 text-center">NextJs pokedex</h1>
        </Layout>
        </div>
        <Footer/>
      </main>)
    
};
