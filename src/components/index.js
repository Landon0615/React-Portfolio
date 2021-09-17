import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanava: {
        postion: "absolute"
    }
})

export const Home = () => {

    const classes = useStyles()

    return (
        <>
        <Navbar/>
        <Header/>
        <Particles
        canvasClassName={classes.particlesCanava}
          params={{
              particles: {
                  number: {
                      value: 150,
                      density: {
                        enabled: true,
                        volume_area: 100000
                      }
                  },
                  shape: {
                      type: "circle",
                      stroke: {
                          width: 1,
                          color: "teal"
                      }
                  },
                  size: {
                      value: 4,
                      random: true,
                      anim: {
                          enable: true,
                          speed: .01,
                          size_min: 0.1,
                          sync: true
                      }
                  },
                  opacity:{
                      value: .5,
                      random: true,
                      anim : {
                          enable: true,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: true
                      }
                  }
              }
          }}
        />
        </>
    );
};

export default Home;