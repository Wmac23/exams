import React, {useState} from "react";
import Styles from "./help.module.css";

export const Help = ({ text, children }) => {
const [isVisible, setIsVisible] = useState(false);
return ( 
<div 
className={Styles.container}
onMouseEnter={()=> setIsVisible(true)}
onMouseLeave={()=> setIsVisible(false)}
>
{children} 
{isVisible && <div className={Styles.help}><h3>Synkronisér highlights</h3>
<p>Klik på et datapunkt i et plot, og det vil blive fremhævet. Denne markering spejles på relevante plots, så du kan sammenligne og forstå data på tværs af visualiseringer</p>
<br />
<h3>Fjern synkroniseringen</h3>
<p>Klik på "Slet valg" i topmenuen. Hvis dette ikke virker, så opdatér siden ved at trykke på F5 eller på din browsers opdateringsknap</p></div>}
<span className={Styles.button}>Hjælp</span>
</div>
);
}