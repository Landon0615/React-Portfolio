import Particles from 'react-particles-js'
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanava: {
        postion: "absolute",
        opacity: "0.3",
    }
})

export const Particle = () => {

    const classes = useStyles()

    return (
        <Particles
        canvasClassName={classes.particlesCanava}
          params={{
              particles: {
                  number: {
                      value: 40,
                      density: {
                        enabled: true,
                        volume_area: 500
                      }
                  },
                  shape: {
                      type: "circle",
                      stroke: {
                          width: 1,
                          color: "purple"
                      }
                  },
                  size: {
                      value: 5,
                      random: true,
                      anim: {
                          enable: true,
                          speed: .001,
                          size_min: 0.1,
                          sync: true
                      }
                  },
                  opacity:{
                      value: 1,
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
        );
};


        export default Particle;