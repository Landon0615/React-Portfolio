import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {  Row, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
    AiFillGithub,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GoBook } from "react-icons/go";
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
        right: false
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
                    <IconButton onClick={toggleSlider("right",true)}>
                     <FiMenu  style={{color: "#6200ea", fontSize: '40px'}} />
                    </IconButton>
                    <Typography variant="h5" style={{color: "#006064", fontSize: '40px'}}> Portfolio </Typography>
                    <MobileRightMenuSlider 
                     anchor="right"
                     open={state.right}
                     onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                    </MobileRightMenuSlider>
                    <Row>
                      
          <Col md={12} className="home-about-social">
              
            <ul className="home-about-social-links" style={{color: "#6200ea", fontSize: '20px'}}>
            Connect with me
              <li className="social-icons">
                
                <a
                  href="https://github.com/Landon0615"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                     
                  
                  <AiFillGithub style={{color: "#6200ea", fontSize: '30px'}}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/landon-waddell-2b85071a8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{color: "#6200ea", fontSize: '30px'}}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://docs.google.com/document/d/1htDMN6JKEFnsPJkyd9qwEhtHgs1F2687/edit?usp=sharing&ouid=102450789307734755664&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GoBook style={{color: "#6200ea", fontSize: '30px'}}/>
                </a>
               
              </li>
            </ul>
          </Col>
        </Row>
                </Toolbar>

            </AppBar>
          
        </Box>
        </>
    );
};

export default Navbar;
