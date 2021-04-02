import React, {useEffect,useState} from 'react'
import {SideChat} from '../components'
import {Avatar} from "@material-ui/core";
import {Link} from 'react-router-dom'

export function SideChatContainer({id, name}){

    const [seed,setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    },[])
    return(
        <Link to={`/rooms/${id}`}>
        <SideChat>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <SideChat.Info>
                <SideChat.Header>{name}</SideChat.Header>
                <SideChat.SubHeader>Last Message</SideChat.SubHeader>
            </SideChat.Info>
        </SideChat>
        </Link>
    )
}