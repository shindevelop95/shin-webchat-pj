import React from 'react'
import { Main } from '../components'
import {SideNavContainer} from './SideNavContainer'
import {SideBarContainer} from './SideBarContainer'
import { SideChatContainer } from './SideChatContainer'

export function MainContainer({}){
    return(
        <Main>
            <Main.FlexboxOne>
                <SideNavContainer/>
            </Main.FlexboxOne>
            <Main.FlexboxTwo>
                <SideBarContainer/>
                <SideChatContainer/>
                <SideChatContainer/>
                <SideChatContainer/>
                <SideChatContainer/>
                <SideChatContainer/>
            </Main.FlexboxTwo>
            <Main.FlexboxThree>3</Main.FlexboxThree>
            <Main.FlexboxFour>4</Main.FlexboxFour>
        </Main>
    )
}