import React from "react";
import Link from "next/link";
import navStyles from "./Navbar.module.css";
function Navbar() {
return(
<div className={navStyles.nav}>
<ul>
<Link href='/'><li className={navStyles.points}>Forside</li></Link> 
<Link href='/luftfart'><li className={navStyles.points}>Luftfart</li></Link>
<Link href='/jernbaner'><li className={navStyles.points}>Jernbaner</li></Link>
<Link href='/busser'><li className={navStyles.points}>Busser</li></Link>
<Link href='/rejsekort'><li className={navStyles.points}>Rejsekort</li></Link>
<Link href='/data'><li className={navStyles.points}>Om data</li></Link>
</ul>
</div>
)
}

export default Navbar