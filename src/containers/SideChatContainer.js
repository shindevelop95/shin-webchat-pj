import React, {useEffect,useState} from 'react'
import {SideChat} from '../components'
import {Avatar} from "@material-ui/core";
import {Link} from 'react-router-dom'
import db from '../lib/firebase'

export function SideChatContainer({id, name}){

    const [seed,setSeed] = useState("");
    const [messages,setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection("rooms")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc) => 
            doc.data())))
        }
    },[])
    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    },[])
    return(
        <Link to={`/rooms/${id}`}>
        <SideChat>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <SideChat.Info>
                <SideChat.Header>{name}</SideChat.Header>
                <SideChat.SubHeader>{messages[0]?.message.substring(0,10)}</SideChat.SubHeader>
            </SideChat.Info>
        </SideChat>
        </Link>
    )
}