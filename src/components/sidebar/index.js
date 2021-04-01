import React from 'react';
import {Container,BtnGroup,ButtonText,Header,Input,Btn} from './styles/sidebar'

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
    return<BtnGroup {...restProps}>{children}</BtnGroup>
}

SideBar.Input = function SideBarInput({children,...restProps}){
    return<Input {...restProps}>{children}</Input>
}

