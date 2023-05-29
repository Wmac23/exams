import React from "react"
import StyledFirebaseAuth from "react-firebaseui"
import firebase from "../../firebase/clientApp"

const uiConfig = {

signInSuccessUrl: "/home",

signInOptions: [firebase.auth.GithubProvider.PROVIDER_ID],

};

function SignIn() {
  return(
    <div>
    <h1>PókeDex Login</h1>
    <p>Please sign in</p>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );  
}

export default SignIn;
