import React from 'react'
import {Login} from '../components'
import {auth,provider} from '../lib/firebase';

export function LoginContainer({}){
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((error) => alert(error.message));

    };
    return(
        <Login>
            <Login.Group>
                <Login.Image src={'images/chirpbird.png'}/>
                <Login.TextGroup>
                    <Login.Text>Sign in to Chirpee</Login.Text>
                </Login.TextGroup>
                <Login.Button onClick={signIn}>Sign In with Google</Login.Button>
            </Login.Group>
        </Login>
    )
}