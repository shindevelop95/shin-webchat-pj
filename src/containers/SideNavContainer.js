import React from 'react';
import {SideNav} from '../components'
import '../utils/utils.css'
import DateRangeIcon from '@material-ui/icons/DateRange';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export function SideNavContainer({}){
    return(
        <SideNav>
             <SideNav.Logo/>
            <SideNav.Group>
                <SideNav.Button>
                    <DateRangeIcon/>
                </SideNav.Button>
                <SideNav.Button>
                    <MessageIcon/>  
                </SideNav.Button>
                <SideNav.Button>
                    <NotificationsActiveIcon/>
                </SideNav.Button>
            </SideNav.Group>
            <SideNav.Group>
                <SideNav.Button>
                    <PeopleIcon/>
                </SideNav.Button>
                <SideNav.Button>
                    <SettingsIcon/>
                </SideNav.Button>
                <SideNav.Button>
                    <AccountCircleIcon/>
                </SideNav.Button> 
            </SideNav.Group>
        </SideNav>
    )
}