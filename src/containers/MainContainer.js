import React, {useState, useEffect} from 'react'
import { Main } from '../components'
import {SideNavContainer} from './SideNavContainer'
import {SideBarContainer} from './SideBarContainer'
import { SideChatContainer } from './SideChatContainer'
import {ChatBoxContainer} from './ChatBoxContainer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import db from "../lib/firebase"


export function MainContainer({}){
    const [options, setOptions] = useState([])

    useEffect(() => {
       const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
            setOptions(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        )

        return () => {
            unsubscribe();
        }
    })
    return(
        <Main>
            <Router>
            <Main.FlexboxOne>
                <SideNavContainer/>
            </Main.FlexboxOne>
            <Main.FlexboxTwo>
                <SideBarContainer/>
                {options.map(option => (
                    <SideChatContainer key={option.id} id={option.id} name={option.data.name}/>
                ))}
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