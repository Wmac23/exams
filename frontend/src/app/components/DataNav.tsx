import React from "react";
import Link from "next/link";
import navStyles from "./DataNav.module.css";
function DataNav() {
    
return(
<main className={navStyles.nav}>
<ul >
<Link href='/data'><li className={navStyles.points}>Datakvalitet</li></Link> 
<Link href='/data/henvisninger'><li className={navStyles.points}>Henvisninger</li></Link>
</ul>
</main>
)
}

export default DataNav