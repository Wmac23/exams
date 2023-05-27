import React from "react";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <a href="/">
      <ul>
     <img className={navStyles.logo} src="logo.png" alt="" />
        <img className={navStyles.title} src="mypokemon.png" alt="" />
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
