import React from 'react';
import {SideNav} from '../components'
import DateRangeIcon from '@material-ui/icons/DateRange';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from 'react-router-dom'
import { useStateValue } from '../utils/StateProvider';
import { Avatar} from '@material-ui/core'

export function SideNavContainer({}){
    const [{user},dispatch] = useStateValue();
    return(
        <SideNav>
        <Link to ="/">
             <SideNav.Logo/>
             </Link>
            <SideNav.Group>
                <SideNav.Button>
                    <DateRangeIcon/>
                </SideNav.Button>
                <SideNav.Button>
                    <MessageIcon className="active_icon"/>  
                </SideNav.Button>
                <SideNav.Button>
                    <NotificationsActiveIcon/>
                </SideNav.Button>
            </SideNav.Group>
            <SideNav.Group>
                <SideNav.Button >
                    <PeopleIcon/>
                </SideNav.Button>
                <SideNav.Button>
                    <SettingsIcon/>
                </SideNav.Button>
                <SideNav.Button>
                    <Avatar src={user?.photoURL}/>
                </SideNav.Button> 
            </SideNav.Group>
        </SideNav>
    )
}