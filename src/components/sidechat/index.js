import React from 'react';
import {Container,Info,Header,SubHeader} from './styles/sidechat'


export default function SideChat({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

SideChat.Info = function SideChatInfo({children,...restProps}){
    return <Info {...restProps}>{children}</Info>
}

SideChat.Header = function SideChatHeader({children,...restProps}){
    return <Header {...restProps}>{children}</Header>
}

SideChat.SubHeader = function SideChatSubHeader({children,...restProps}){
    return <SubHeader {...restProps}>{children}</SubHeader>
}
