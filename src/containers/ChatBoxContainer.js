import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {ChatBox,SideChat} from '../components'
import {Avatar} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SendIcon from '@material-ui/icons/Send';
import db from "../lib/firebase"
import firebase from 'firebase'
import {useStateValue} from '../utils/StateProvider'

export function ChatBoxContainer({}){
    const [seed,setSeed] = useState("");
    const {roomId} = useParams();
    const [chatBox,setChatBox] = useState(""); 
    const [input, setInput] = useState("");
    const [messages,setMessages] = useState([]); 
    const [{user},dispatch] = useStateValue();
    const [sender, setSender] = useState(true);
    const [receiver,setReceiver] = useState(true);

    console.log(input);

   useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).
            onSnapshot(snapshot => (
                setChatBox(snapshot.data().name)
            ))

            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => 
                    doc.data()
                ))
            )
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    },[])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("u typed>>>", input);

        db.collection('rooms').doc(roomId).collection
        ('messages').add({
            message:input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
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
                {messages.map((message) => (
                    <ChatBox.Message className = {message.name === user.displayName? "sender":"receiver"}>{message.message}<ChatBox.Timestamp className="sender_inner">52 mins ago</ChatBox.Timestamp></ChatBox.Message>
                    ))}
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