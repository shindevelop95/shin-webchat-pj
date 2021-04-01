import React, {useEffect,useState} from 'react'
import {SideChat} from '../components'
import {Avatar} from "@material-ui/core";

export function SideChatContainer({}){

    const [seed,setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    },[])
    return(
        <SideChat>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <SideChat.Info>
                <SideChat.Header>User Test</SideChat.Header>
                <SideChat.SubHeader>Last Message</SideChat.SubHeader>
            </SideChat.Info>
        </SideChat>
    )
}