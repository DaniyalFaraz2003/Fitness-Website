import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Hero from './HomeComponents/Hero'
import Hero2 from './HomeComponents/Hero2'

function DummyHome() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Hero2 />
            <Footer />
        </div>
    )
}

export default DummyHome