import React,{useState}from 'react';
import {Profile} from '../components'
import {Avatar} from "@material-ui/core";
import {useStateValue} from '../utils/StateProvider'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import StarIcon from '@material-ui/icons/Star';

export function ProfileContainer({}){
    const [{user},dispatch] = useStateValue();
    const [toggle, setToggle] = useState(false)
    const [imagetoggle,setImageToggle] =useState(false);
    const [filetoggle,setFileToggle] = useState(false);
    const [pintoggle,setPinToggle] = useState(false);
    return(
        <Profile>
            <Profile.Group>
                <Avatar src={user?.photoURL}/>
                <Profile.Header>{user?.displayName}</Profile.Header>
                <Profile.SubHeader>Designer and Frontend Developer</Profile.SubHeader>
            </Profile.Group>
            <Profile.Tag>
                <Profile.Header>Information</Profile.Header>
                {toggle === false?  <KeyboardArrowDownIcon onClick={() => setToggle(!toggle)}/> :
                <KeyboardArrowUpIcon onClick={() => setToggle(!toggle)}/> 
                }
               
            </Profile.Tag>
            <Profile.Content toggle={toggle}>
                <Profile.Info>"A final year undergraduate who is passionate about design and frontend development, and a big believer in hard work pay off"</Profile.Info>
            </Profile.Content>
            <Profile.Tag>
                <Profile.Header>Images (5) </Profile.Header>
                {imagetoggle === false?  <KeyboardArrowDownIcon onClick={() => setImageToggle(!imagetoggle)}/> :
                <KeyboardArrowUpIcon onClick={() => setImageToggle(!imagetoggle)}/> 
                }
               
            </Profile.Tag>
            <Profile.Content toggle={imagetoggle}>
                <Profile.Gallery>
                    <Profile.Item> <img src="images/p1.jpg"/></Profile.Item>
                    <Profile.Item><img src="images/p2.jpg"/></Profile.Item>
                    <Profile.Item><img src="images/p3.jpg"/></Profile.Item>
                    <Profile.Item><img src="images/p4.jpg"/></Profile.Item>
                    <Profile.Item><img src="images/p5.jpg"/></Profile.Item>
                </Profile.Gallery>
            </Profile.Content>
            <Profile.Tag>
                <Profile.Header>Files (3)</Profile.Header>
                {filetoggle === false?  <KeyboardArrowDownIcon onClick={() => setFileToggle(!filetoggle)}/> :
                <KeyboardArrowUpIcon onClick={() => setFileToggle(!filetoggle)}/> 
                }
               
            </Profile.Tag>
            <Profile.Content toggle={filetoggle}>
                <Profile.FileGroup>
                    <CloudDownloadIcon/>
                    <Profile.FileText>JavaUDP.zip</Profile.FileText>
                </Profile.FileGroup>
                <Profile.FileGroup>
                    <CloudDownloadIcon/>
                    <Profile.FileText>PythonA1.zip</Profile.FileText>
                </Profile.FileGroup>
                <Profile.FileGroup>
                    <CloudDownloadIcon/>
                    <Profile.FileText>Cloud.pdf</Profile.FileText>
                </Profile.FileGroup>
            </Profile.Content>

            <Profile.Tag>
                <Profile.Header>Pinned Items</Profile.Header>
                {pintoggle === false?  <KeyboardArrowDownIcon onClick={() => setPinToggle(!pintoggle)}/> :
                <KeyboardArrowUpIcon onClick={() => setPinToggle(!pintoggle)}/> 
                }
               
            </Profile.Tag>   
            <Profile.Content toggle={pintoggle}>
               <Profile.PinGroup>
                   <StarIcon/>
                   <Profile.PinHeader>Monthly Coding Challenge</Profile.PinHeader>
               </Profile.PinGroup>
               <Profile.PinText>About Chirpee Monthly Programming Contests: Chirpee was created as a community platform to help coders compete against each other and make it big in the world of computer programming.</Profile.PinText>
            </Profile.Content>
        </Profile>
    )
}
