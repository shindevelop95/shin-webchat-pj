import React from 'react';
import {SideBar} from '../components';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

export function SideBarContainer({}){
    return(
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
    )
}