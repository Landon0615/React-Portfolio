import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../avatar.png';
export const Header = () => {
    return (
        <Box>
       <Avatar src={avatar} alt="Landon Waddell"/> 
        </Box>
    );
};

export default Header