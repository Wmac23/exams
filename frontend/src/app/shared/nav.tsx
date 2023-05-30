import React from "react";
import navStyles from "./Nav.module.css";
import { LogOut } from "../components/logOut";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <a href="/home"><img className={navStyles.logo} src="logo.png" alt="" /></a>
        <a href="/home"><img className={navStyles.title} src="mypokemon.png" alt="" /></a>
        
        
      
      <ul>
      <a href="/home"><button>Home</button></a>
       <a href="/mypokemon"><button>My Pókemon</button></a>
        <a href="/pokemonlist"><button>Pókemon list</button></a>
        </ul>
        <LogOut/>
    </nav>
  );
}
