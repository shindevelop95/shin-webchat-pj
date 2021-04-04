import React from 'react';
import {Container,Tag, Group,Header,SubHeader,Content, Gallery,Info,Item, FileText, FileGroup, PinText,PinGroup,PinHeader} from './styles/profile'

export default function Profile({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Profile.Group = function ProfileGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Profile.Header = function ProfileHeader({children,...restProps}){
    return <Header {...restProps}>{children}</Header>
}

Profile.SubHeader = function ProfileSubHeader({children,...restProps}){
    return <SubHeader {...restProps}>{children}</SubHeader>
}

Profile.Tag = function ProfileTag({children,...restProps}){
    return(<Tag {...restProps}>{children}</Tag>)
}

Profile.Content = function ProfileContent({children,...restProps}){
    return(<Content {...restProps}>{children}</Content>)
}

Profile.Info = function ProfileInfo({children,...restProps}){
    return(<Info {...restProps}>{children}</Info>)
}

Profile.Gallery = function ProfileGallery({children,...restProps}){
    return(<Gallery {...restProps}>{children}</Gallery>)
}


Profile.Item = function ProfileItem({children,...restProps}){
    return(<Item {...restProps}>{children}</Item>)
}

Profile.FileGroup = function ProfileFileGroup({children,...restProps}){
    return(<FileGroup {...restProps}>{children}</FileGroup>)
}

Profile.FileText = function ProfileFileText({children,...restProps}){
    return(<FileText {...restProps}>{children}</FileText>)
}

Profile.PinGroup = function ProfilePinGroup({children,...restProps}){
    return(<PinGroup {...restProps}>{children}</PinGroup>)
}

Profile.PinHeader = function ProfilePinHeader({children,...restProps}){
    return(<PinHeader {...restProps}>{children}</PinHeader>)
}

Profile.PinText = function ProfilePinText({children,...restProps}){
    return(<PinText {...restProps}>{children}</PinText>)
}


