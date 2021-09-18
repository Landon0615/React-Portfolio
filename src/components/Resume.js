import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core/'
import Navbar from './Navbar'

// const useStyles = makeStyles(theme=>({
//     mainContainer: {
//         background: '#223'
//     },
//     timeLine: {
//         postion: 'relative',
//         padding: '1rem',
//         margin: '0 auto',
//         '$:before': {
//             content: '""',
//             position: 'absolute',
//             height: '100%',
//             border: '1px solid purple',
//             right: '40px',
//             top: 0
//         },
//         '&:after': {
//             content: '""',
//             display: 'table',
//             clear: 'both'
//         },
//         [theme.breakpoints.up('md')]:{
//             padding: '2rem',
//             '&:before': {
//                 left: 'calc(50% - 1px)',
//                 right: 'auto'
//             }
//         }
//     },
//     timeLineYear: {
//         textAlign:'center',
//         maxWidth: '9.375rem',
//         margin: '0 3rem 0 auto',
//         fontSize: '1.8rem',
//         background: 'teal',
//         color: 'white',
//         lineHeight: 1,
//         padding: '0.5rem 0 1rem',
//         '&:before': {
//             display: 'none'
//         },
//         [theme.breakpoints.up("md")]: {
//             textAlign: 'center',
//             margin: '0 auto',
//             '&:nth-of-type(2n)': {
//                 float: 'none',
//                 margin: '0 auto'
//             },
//             '&:nth-of-type(2n):before': {
//                 display: 'none'
//             }
//         }
//     }
// }))

// export const Resume = () => {
//     const classes = useStyles();
//     return (
//         <>
//
//         <Box component="div" className={classes.mainContainer}>
//             <Typography align="center">
//                 working experience
//             </Typography>
//             <Box component='div' className={classes.timeLine}>
//                 <Typography variant='h2' className={classes.timeLineYear}>2013</Typography>
//             </Box>
//         </Box>
//         </>
//     );
// };

export const Resume = () => {

    return (
        <>
        <Navbar />
        <div>
        <div className="card brown lighten-3 z-depth-0">
            <div className="card-content">
                <h6 className="no-pad mt-bottom brown-text text-darken-4">
                    <strong>ABOUT ME</strong>
                </h6>
                <p className="pt brown-text text-darken-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum
            doloribus dicta quod architecto, praesentium totam molestiae
            similique culpa repellat blanditiis nam facilis eius quaerat
            distinctio vitae, tenetur beatae repellendus?
                </p>
        <div>
        <div className="card brown lighten-3 z-depth-0">
            <div className="card-content">
                <h6 className="brown-text text-darken-4">
                    <strong>
                        <i className="fas fa-graduation-cap"></i> EDUCATION
                    </strong>
                </h6>
                <hr />
                <div className="row mt">
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>BACHELOR OF ART</strong>
                                <span>2009 - 2013</span>
                            </h6>
                            <p className="pt brown-text text-darken-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </blockquote>
                    </div>
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>BACHELOR OF SCIENCE</strong>
                                <span>2014 - 2019</span>
                            </h6>
                            <p className="pt brown-text text-darken-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </blockquote>
                    </div>
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>MASTER OF ART</strong>
                                <span>2019 - 2021</span>
                            </h6>
                            <p className="pt brown-text text-darken-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </blockquote>
                        <div>
        <div className="card brown lighten-3 z-depth-0">
            <div className="card-content">
                <h6 className="brown-text text-darken-4">
                    <strong>
                        <i className="fas fa-tools"></i> EXPERIENCE
                    </strong>
                </h6>
                <hr />
                <div className="row mt">
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>FULL STACK WEB DEVELOPER</strong>
                                <span>2015 - 2021</span>
                            </h6>
                            <p className="pt brown-text text-darken-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </blockquote>
                    </div>
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>BACKEND WEB DEVELOPER</strong>
                                <span>2011 - 2015</span>
                            </h6>
                            <p className="pt brown-text text-darken-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </blockquote>
                    </div>
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>FRONT END WEB DEVELOPER</strong>
                                <span>2009 - 2011</span>
                            </h6>
                            <p className="pt brown-text text-darken-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
                            </p>
                        </blockquote>
        <div>
          <div className="card brown lighten-1 z-depth-0">
              <div className="card-content">
                  <h6 className="white-text">
                      <strong># PROFESSIONAL SKILLS</strong>
                  </h6>
                  <hr />
                  <div className="row pt">
                      <div className="col m6 s12">
                          <p class="grey-text text-lighten-2">HTML</p>
                          <div className="progress white">
                              <div className="determinate brown lighten-3" style={{ width: '89%' }}></div>
                          </div>
                      </div>
                      <div className="col m6 s12">
                          <p class="grey-text text-lighten-2">CSS</p>
                          <div className="progress white">
                              <div className="determinate brown lighten-3" style={{ width: '99%' }}></div>
                          </div>
                      </div>
                  </div>
                  <div className="row pt">
                      <div className="col m6 s12">
                          <p class="grey-text text-lighten-2">JAVASCRIPT</p>
                          <div className="progress white">
                              <div className="determinate brown lighten-3" style={{ width: '90%' }}></div>
                          </div>
                      </div>
                      <div className="col m6 s12">
                          <p class="grey-text text-lighten-2">PHP</p>
                          <div className="progress white">
                              <div className="determinate brown lighten-3" style={{ width: '95%' }}></div>
                          </div>
                      </div>
                  </div>
                  <div className="row pt">
                      <div className="col m6 s12">
                          <p class="grey-text text-lighten-2">MYSQL</p>
                          <div className="progress white">
                              <div className="determinate brown lighten-3" style={{ width: '80%' }}></div>
                          </div>
                      </div>
                      <div className="col m6 s12">
                          <p class="grey-text text-lighten-2">JQUERY</p>
                          <div className="progress white">
                              <div className="determinate brown lighten-3" style={{ width: '85%' }}></div>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
                </div>
            </div>
        </div>
      </div>
      </div>
                </div>
            </div>
        </div>
      </div>
      </div>
        </div>
      </div>
      </>
      )
    }
  





export default Resume



