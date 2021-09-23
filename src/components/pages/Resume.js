import React, { Component } from 'react';
import Navbar from '../Navbar'
import About from "./about/About";
import Profile from "./profile/Profile";
import Summary from "./summary/Summary";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experiences from "./experiences/Experiences";
import Educations from "./educations/Educations";
import ParticlesBg from 'particles-bg'


export default class Resume extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <ParticlesBg color="#008b8b" num={200} type="cobweb" bg={true} />
      <section style={{ zIndex: 100 }} >
            <About />
        <div className="row sameHeight hide-on-med-and-down">
            <div className="col s12 m12 l8 grey darken-4 sameHeight_child">
                <Summary />
                <Educations />
                <Experiences />
            </div>
            <div className="col s12 m12 l4 grey darken-4 sameHeight_child">
                <Profile />
                <Contact />
                <Skills />
            </div>
        </div>
        <div className="row sameHeight hide-on-large-only">
            <div className="col s12 m12 l4 grey darken-4 sameHeight_child">
                <Profile />
                <Contact />
                <Skills />
            </div>
            <div className="col s12 m12 l8 grey darken-4 sameHeight_child">
                <Summary />
                <Educations />
                <Experiences />
            </div>
        </div>
      </section>
      </>
    )
  }
}
