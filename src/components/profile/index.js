import React from 'react';
import {Container,Group,Header,SubHeader} from './styles/profile'

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


