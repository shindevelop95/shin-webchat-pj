import React, {useEffect,useState} from 'react'
import {ChatBox,SideChat} from '../components'
import {Avatar} from "@material-ui/core";

export function ChatBoxContainer({}){
    const [seed,setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    },[])
    return(
        <ChatBox>
            <ChatBox.Heading>         
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <SideChat.Info>
                    <SideChat.Header>User Test</SideChat.Header>
                    <SideChat.SubHeader>Last Message</SideChat.SubHeader>
                </SideChat.Info>
            </ChatBox.Heading>
            <ChatBox.Body>
                <ChatBox.Message>Hey! What is up?</ChatBox.Message>
            </ChatBox.Body>
        </ChatBox>
    )
}