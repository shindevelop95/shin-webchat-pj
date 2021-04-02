import React from 'react';
import {Container,Heading,Body,Footer,Message,Timestamp,Form,Input} from './styles/chatbox'

export default function ChatBox({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

ChatBox.Heading = function ChatBoxHeading({children,...restProps}){
    return <Heading {...restProps}>{children}</Heading>
}

ChatBox.Message = function ChatBoxMessage({children,...restProps}){
    return <Message {...restProps}>{children}</Message>
}

ChatBox.Body = function ChatBoxBody({children,...restProps}){
    return <Body {...restProps}>{children}</Body>
}

ChatBox.Footer = function ChatBoxFooter({children,...restProps}){
    return <Footer {...restProps}>{children}</Footer>
}

ChatBox.Timestamp = function ChatBoxTimestamp({children,...restProps}){
    return <Timestamp {...restProps}>{children}</Timestamp>
}

ChatBox.Form = function ChatBoxForm({children,...restProps}){
    return <Form {...restProps}>{children}</Form>
}

ChatBox.Input = function ChatBoxInput({children,...restProps}){
    return <Input {...restProps}/>
}