import React, {useState} from "react";
import Styles from "./tooltip.module.css";

export const Tooltip = ({ children }) => {
const [isVisible, setIsVisible] = useState(false);
return ( 
<div 
className={Styles.container}
onMouseEnter={()=> setIsVisible(true)}
onMouseLeave={()=> setIsVisible(false)}
>
{children} 
{isVisible && <div className={Styles.tooltip}><p>Har du kommentarer eller spørgsmål, er du velkommen til at skrive til Trafikstyrelsen ved at <a href="">klikke her.</a></p></div>}
<img src="info.png" alt=""/>
</div>
);
}