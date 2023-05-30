"use client";

import Footer from "../shared/footer";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    const signIn = async () => {
        
        try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch(err) {
        console.log(err)
    }
    };
    
    const signInWithGoogle = async () => {
        
        try {
        await signInWithPopup(auth, googleProvider);
    } catch(err) {
        console.log(err)
    }
    };

    return(
        <main> 
            <img src="mypokemon.png" alt="" />
        <div className="logon">
            <input placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <div className="signin">
            <button onClick={signIn}>Sign in</button>
            <button className="signinGoogle" onClick={signInWithGoogle}>Sign in with google</button>
            </div>
        
    </main>
    );
};