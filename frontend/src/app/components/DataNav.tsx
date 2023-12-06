import React from "react";
import Link from "next/link";
import navStyles from "./RejsekortNav.module.css";
function DataNav() {
    
return(
<div className={navStyles.nav}>
<ul>
<Link href='/data'><li className={navStyles.points}>Datakvalitet</li></Link> 
<Link href='/data/henvisninger'><li className={navStyles.points}>Henvisninger</li></Link>
<Link href='/data/tips'><li className={navStyles.points}>Tips og tricks</li></Link>
</ul>
</div>
)
}

export default DataNav