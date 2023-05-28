import React from "react";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <a href="/"><img className={navStyles.logo} src="logo.png" alt="" /></a>
        <a href="/"><img className={navStyles.title} src="mypokemon.png" alt="" /></a>
        
        
      
      <ul>
      <a href="/"><button>Home</button></a>
       <a href="/mypokemon"><button>My Pókemon</button></a>
        <a href="/pokemonlist"><button>Pókemon list</button></a>
        <button>Log out</button>
        </ul>
    </nav>
  );
}
