import React from 'react';
import { Button } from '@material-ui/core';
import {Container,Group,Logo} from './styles/sidenav'

export default function SideNav({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

SideNav.Logo = function SideNavLogo({...restProps}){
    return <Logo {...restProps}>
        <img src={'images/chirpbird.png'}/>
    </Logo>
}

SideNav.Group = function SideNavGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

SideNav.Button = function SideNavButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>
}