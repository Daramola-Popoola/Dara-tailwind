import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <div className="flex pt-2 justify-between items-center h-16 bg-white text-black relative shadow-sm font-sans" role="navigation">
            <nav>
                <Link to='/' className="pl-10">EGG</Link>
            </nav>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg className="w-6 h-6"
             fill="none"
              stroke="currentColor"
               viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round"
                     strokeLinejoin="round"
                      strokeWidth="2"
                       d="M4 6h16M4 12h8m-8 6h16"
                       >
                    </path>
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/About">About</Link>
                <Link className="p-4" to="/Menu">Services</Link>
                <Link className="p-4" to="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
