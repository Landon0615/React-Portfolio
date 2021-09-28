import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import ParticlesBg from 'particles-bg'



export const Home = () => {

 

    return (
        <>
        <Navbar/>
        <Header/>
        <ParticlesBg color="#008b8b" num={200} type="cobweb" bg={true} />
        <Footer/>
        </>
    );
};

export default Home;