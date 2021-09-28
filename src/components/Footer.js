import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { 
    Box,
    Grid,
 } from '@material-ui/core'




export const Footer = () => {
 
    return (
        <>
    <Box >
    <Grid container justify="center" >
            <ul className="home-about-social-links"   style={{color: "#6200ea", fontSize: '20px'}}>
              <li className="social-icons">
                
                <a
                  href="https://github.com/Landon0615"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                     
                  
                  <AiFillGithub   style={{color: "#6200ea", fontSize: '30px'}}/>
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
            </Grid>
    </Box>
        </>
    );
};

export default Footer;