import { auth } from "./firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { async } from "@firebase/util"; 

export default function Home() {

  const googleAuth = new GoogleAuthProvider();
  const login = async() => {
    const result = await signInWithPopup(auth, googleAuth);
  };  
  return (
<main>
<div>
<h1>Sign in</h1>
<button onClick={login}>Login</button>
</div>
</main>
  )
}