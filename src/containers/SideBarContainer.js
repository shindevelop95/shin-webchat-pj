import React,{useState,useEffect} from 'react';
import {SideBar} from '../components';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { SideChatContainer } from './SideChatContainer'
import db from "../lib/firebase"

export function SideBarContainer({}){
    const [options, setOptions] = useState([])


    useEffect(() => {
       const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
            setOptions(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        )

        return () => {
            unsubscribe();
        }
    },[])
    return(
        <>
        <SideBar>
            <SideBar.BtnGroup>
                <AddIcon/>
                <SideBar.ButtonText>New Conversation</SideBar.ButtonText>
            </SideBar.BtnGroup>
            <SideBar.Header>Chats</SideBar.Header>
            <SideBar.Group>
                <SideBar.Input placeholder="Search here"/>
                <SearchIcon/>
            </SideBar.Group>
        </SideBar>
        {options.map(option => (
                    <SideChatContainer key={option.id} id={option.id} name={option.data.name}/>
                ))}
        </>
    )
}