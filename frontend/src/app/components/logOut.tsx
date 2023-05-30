"use client";

import { useRouter } from "next/router";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";

export const LogOut = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    const logOut = async () => {    
        try {
        await signOut(auth);
    } catch(err) {
        console.log(err)
    }
    };

    return(
        <main>
        <div>
            <a href="/"><button onClick={logOut}>Log out</button></a>
        </div>
    </main>
    );
};