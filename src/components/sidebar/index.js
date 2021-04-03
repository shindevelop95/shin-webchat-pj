import React from 'react';
import db from '../../lib/firebase'
import {Container,Group,BtnGroup,ButtonText,Header,Input,Btn} from './styles/sidebar'

export default function SideBar({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

SideBar.ButtonText = function SideBarButtonText({children,...restProps}){
    return<ButtonText {...restProps}>{children}</ButtonText>
}

SideBar.Header = function SideBarHeader({children,...restProps}){
    return<Header {...restProps}>{children}</Header>
}

SideBar.Btn = function SideBarBtn({children,...restProps}){
    return<Btn {...restProps}>{children}</Btn>
}

SideBar.BtnGroup = function SideBarBtnGroup({children,...restProps}){
    const createChat = () => {
        const roomName = prompt("Please enter new Chirp");

        if(roomName){
            db.collection("rooms").add({
                name:roomName,
            })
        }
    }
    return<BtnGroup onClick={createChat} {...restProps}>{children}</BtnGroup>
}

SideBar.Input = function SideBarInput({children,...restProps}){
    return<Input {...restProps}/>
}

SideBar.Group = function SideBarGroup({children,...restProps}){
    return<Group {...restProps}>{children}</Group>
}

