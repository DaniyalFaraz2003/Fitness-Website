import React from "react";
import Navbar from "../Navbar/NavbarHome";
import Footer from "../Footer/Footer";
import Hero from './HomeComponents/Hero'
import Hero2 from './HomeComponents/Hero2'
import Explore from './HomeComponents/Explore'

function Home({ onLogout }) {
    return (
        <div>
            <Navbar onLogout={onLogout} />
            <Hero />
            <Hero2 />
            <Explore />
            <Footer />
        </div>
    );
}

export default Home;