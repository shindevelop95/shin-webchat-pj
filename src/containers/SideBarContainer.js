import React from 'react';
import {SideBar} from '../components';
import AddIcon from '@material-ui/icons/Add';
import '../utils/utils.css'

export function SideBarContainer({}){
    return(
        <SideBar>
            <SideBar.BtnGroup>
                <AddIcon/>
                <SideBar.ButtonText>New Conversation</SideBar.ButtonText>
            </SideBar.BtnGroup>
        </SideBar>
    )
}