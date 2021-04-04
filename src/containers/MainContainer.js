import React, {useState, useEffect} from 'react'
import { Main } from '../components'
import {SideNavContainer} from './SideNavContainer'
import {SideBarContainer} from './SideBarContainer'
import { SideChatContainer } from './SideChatContainer'
import {ChatBoxContainer} from './ChatBoxContainer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import db from "../lib/firebase"
import { useStateValue } from '../utils/StateProvider'


export function MainContainer({}){
  
    return(
        <Main>
            <Router>
            <Main.FlexboxOne>
                <SideNavContainer/>
            </Main.FlexboxOne>
            <Main.FlexboxTwo>
                <SideBarContainer/>
                
            </Main.FlexboxTwo>
            <Switch>
                <Route path="/rooms/:roomId">
                <Main.FlexboxThree>
                    <ChatBoxContainer/>
                </Main.FlexboxThree>
                </Route>
                <Route path="/">
                <Main.FlexboxThree>
                        <ChatBoxContainer/>
                    </Main.FlexboxThree>
                </Route>
            </Switch>
            <Main.FlexboxFour>4</Main.FlexboxFour>
            </Router>
        </Main>
    )
}