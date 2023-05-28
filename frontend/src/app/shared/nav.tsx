import React from "react";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <a href="/">
        <ul className={navStyles.logo}>
          <li><img src="logo.png" alt="" /></li>
          <li><img src="mypokemon.png" alt="" /></li> 
        </ul>
      </a>
      <ul>
      <a href="/"><button>Home</button></a>
       <a href="/mypokemon"><button>My Pókemon</button></a>
        <a href="/pokemonlist"><button>Pókemon list</button></a>
        <button>Log out</button>
        </ul>
    </nav>
  );
}
