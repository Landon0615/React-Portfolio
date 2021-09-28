import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import ReactTypingEffect from "react-typing-effect";
import avatar from './images/avatar.png';

// CSS STYLES 
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(2.75)
    },
    title: {
        color: "teal"

    },
    subtitle: {
        color: "#607d8b",
        marginBottom: "3rem"

    },
    typedContainer: {
        postion: "absolute",
        top: "50%",
        left: "50%",
        transform: "transform(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

export const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
          <Grid container justify="center" >
            <Avatar className={classes.avatar} src={avatar} alt="Landon Waddell"/> 
       </Grid>
       <Typography className={classes.title} variant="h4">
           <ReactTypingEffect text={["Landon Waddell"]}  />
       </Typography>
       <br/>
       <Typography className={classes.subtitle} variant="h5">
           <ReactTypingEffect text={["Web Design","Web Development","MERN Stack"]}         
           />
       </Typography>
       <Typography className={classes.title} variant="h4">
           <ReactTypingEffect text={["About Me"]}/>
       </Typography>
       <Box sx={{ textAlign: 'center', m: 1, fontFamily: 'Monospace', fontSize: 20, color: '#607d8b', fontWeight: 'bold'}}>Toyota Technician | Software Developer | Hardware Enthusiast</Box>
        </Box>
        
    );
};

export default Header