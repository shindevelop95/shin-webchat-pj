import React from 'react'
import { Main } from '../components'
import {SideNavContainer} from './SideNavContainer'
import {SideBarContainer} from './SideBarContainer'

export function MainContainer({}){
    return(
        <Main>
            <Main.FlexboxOne>
                <SideNavContainer/>
            </Main.FlexboxOne>
            <Main.FlexboxTwo>
                <SideBarContainer/>
            </Main.FlexboxTwo>
            <Main.FlexboxThree>3</Main.FlexboxThree>
            <Main.FlexboxFour>4</Main.FlexboxFour>
        </Main>
    )
}