import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {ChatBox,SideChat} from '../components'
import {Avatar} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SendIcon from '@material-ui/icons/Send';
import db from "../lib/firebase"

export function ChatBoxContainer({}){
    const [seed,setSeed] = useState("");
    const {roomId} = useParams();
    const [chatBox,setChatBox] = useState(""); 
    const [input, setInput] = useState("");
    console.log(input);

   useEffect(() => {
        if(roomId) {
            db.collection('options').doc(roomId).
            onSnapshot(snapshot => (
                setChatBox(snapshot.data().name)
            ))
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    },[])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("u typed>>>", input);
        setInput("");
    }
    return(
        <ChatBox>
            <ChatBox.Heading>         
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <SideChat.Info>
                    <SideChat.Header>{chatBox}</SideChat.Header>
                    <SideChat.SubHeader>Last Message</SideChat.SubHeader>
                </SideChat.Info>
            </ChatBox.Heading>
            <ChatBox.Body>
                <ChatBox.Message>Hey! What is up?<ChatBox.Timestamp>52 mins ago</ChatBox.Timestamp></ChatBox.Message>
            </ChatBox.Body>
            <ChatBox.Footer>
                <ChatBox.Form>
                    <AddBoxIcon color="secondary"/>
                    <ChatBox.Input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message here"/>
                    <SentimentVerySatisfiedIcon color="disabled" fontSize="small"/>
                    <ChatBox.Button onClick={sendMessage} type="submit">
                        <SendIcon fontSize="small" color="secondary" />
                    </ChatBox.Button>
                </ChatBox.Form>
            </ChatBox.Footer>
        </ChatBox>
    )
}