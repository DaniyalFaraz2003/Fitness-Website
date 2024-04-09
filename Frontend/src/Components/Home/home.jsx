import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home({ onLogout }) {
    return (
        <div>
            <Navbar />
            <h1>This is the main home page</h1>
            <Link to="about">Click to view our about page</Link>
            <button onClick={onLogout}>Logout</button>
            <Footer />
        </div>
    );
}

export default Home;