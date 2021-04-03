import React from 'react';
import {Container, Group,Image,TextGroup,Text,Button} from './styles/login'

export default function Login({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Login.Group = function LoginGroup({children,...restProps}){
    return<Group {...restProps}>{children}</Group>
}

Login.Image = function LoginImage({children,...restProps}){
    return<Image {...restProps}/>
} 

Login.TextGroup = function LoginTextGroup({children,...restProps}){
    return<TextGroup {...restProps}>{children}</TextGroup>
} 

Login.Text = function LoginText({children,...restProps}){
    return<Text {...restProps}>{children}</Text>
} 

Login.Button = function LoginButton({children,...restProps}){
    return<Button {...restProps}>{children}</Button>
} 

