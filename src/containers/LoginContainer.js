import React from 'react'
import {Login} from '../components'
import {auth,provider} from '../lib/firebase';
import { actionTypes } from '../utils/reducer';
import { useStateValue } from '../utils/StateProvider';

export function LoginContainer({}){
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            })
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