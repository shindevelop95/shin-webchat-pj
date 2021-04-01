import React from 'react';
import {Container,GroupOne,GroupTwo,GroupThree,GroupFour} from './styles/main'

export default function Main({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Main.FlexboxOne = function MainFlexboxOne({children,...restProps}){
    return <GroupOne {...restProps}>
        {children}
    </GroupOne>
}

Main.FlexboxTwo = function MainFlexboxTwo({children,...restProps}){
    return <GroupTwo {...restProps}>
        {children}
    </GroupTwo>
}

Main.FlexboxThree = function MainFlexboxThree({children,...restProps}){
    return <GroupThree {...restProps}>
        {children}
    </GroupThree>
}

Main.FlexboxFour = function MainFlexboxFour({children,...restProps}){
    return <GroupFour {...restProps}>
        {children}
    </GroupFour>
}