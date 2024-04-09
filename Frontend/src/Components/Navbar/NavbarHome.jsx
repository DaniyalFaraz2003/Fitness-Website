import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLogout, user }) {
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 md:order-1 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <h1 className=" ml-4 text-indigo-500 text-2xl font-extrabold justify-center self-center text-center ">Pro Fitness</h1>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        <li className="md:px-4 md:py-2 text-indigo-500"><Link to="/">Home</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/nutrition">Nutrition</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/fitness">Fitness</Link></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/calculators">Calculators</Link></li>
                    </ul>
                </div>
                <div className="order-2 md:order-3 flex">
                <span className="inline-block text-center justify-center items-center mr-4 bg-blue-500 text-white  text-lg font-semibold rounded-lg p-2 shadow-md shadow-blue-300">{user}</span>
                    <button onClick={onLogout} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}