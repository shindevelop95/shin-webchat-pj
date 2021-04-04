import React from 'react';
import {Profile} from '../components'
import {Avatar} from "@material-ui/core";
import {useStateValue} from '../utils/StateProvider'

export function ProfileContainer({}){
    const [{user},dispatch] = useStateValue()
    return(
        <Profile>
            <Profile.Group>
                <Avatar src={user?.photoURL}/>
                <Profile.Header>{user?.displayName}</Profile.Header>
                <Profile.SubHeader>Designer and Front End Developer</Profile.SubHeader>
            </Profile.Group>
        </Profile>
    )
}
