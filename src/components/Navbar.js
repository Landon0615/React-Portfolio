import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileLeftMenuSlider from '@material-ui/core/Drawer'
import { FiMenu } from "react-icons/fi";

import { 
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
 } from '@material-ui/core'
 import{
     AssignmentInd,
     Home,
     Apps,
     ContactMail
 } from '@material-ui/icons'
 import avatar from './images/avatar.png';

 // CSS styles
 const useStyles = makeStyles(theme=>({
     menuSliderContainer: {
         width:250,
         background: "#006064",
         height: "100%"
     },
     avatar: {
         display: "block",
         margin: "0.5rem auto",
         width: theme.spacing(13),
         height: theme.spacing(13)

     },
     listItem: {
         color: "#3e2723"
     }
 }));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    },
]

export const Navbar = () => {
    const [state, setState] = useState({
        left: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open });
    };
    const classes = useStyles()

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt="Landon Waddell"/>
        <Divider />
        <List>
            {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
            <ListItemText className={classes.listItem} primary={lsItem.listText} secondary={lsItem.list}/>
            </ListItem>
            ))}     
        </List>
        </Box>

    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#263238"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left",true)}>
                     <FiMenu  style={{color: "#6200ea", fontSize: '40px'}} />
                    </IconButton>
                    <Typography variant="h5" style={{color: "#006064", fontSize: '40px'}}> Portfolio </Typography>
                    <MobileLeftMenuSlider 
                     anchor="left"
                     open={state.left}
                     onClose={toggleSlider("left", false)}>
                        {sideList("left")}
                    </MobileLeftMenuSlider>
                </Toolbar>

            </AppBar>
          
        </Box>
        </>
    );
};

export default Navbar;
