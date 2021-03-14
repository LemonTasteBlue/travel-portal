import React from 'react'
import { Router } from 'react-router'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;