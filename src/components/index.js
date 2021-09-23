import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import ParticlesBg from 'particles-bg'



export const Home = () => {

 

    return (
        <>
        <Navbar/>
        <Header/>
        <ParticlesBg color="#008b8b" num={200} type="cobweb" bg={true} />
        </>
    );
};

export default Home;