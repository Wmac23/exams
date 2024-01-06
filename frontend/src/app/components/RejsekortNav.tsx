import React from "react";
import Link from "next/link";
import navStyles from "./RejsekortNav.module.css";
function RejsekortNav() {
return(
<div className={navStyles.nav}>
<ul>
<Link href='/rejsekort'><li className={navStyles.points}>Rejsekortrejser</li></Link> 
<Link href='/rejsekort/fordeling'><li className={navStyles.points}>Fordeling af rejsekortrejser</li></Link>
<Link href='/rejsekort/indtaegter'><li className={navStyles.points}>Rejsekortindtægter</li></Link>
<Link href='/rejsekort/data'><li className={navStyles.points}>Om data</li></Link>
</ul>
</div>
)
}

export default RejsekortNav