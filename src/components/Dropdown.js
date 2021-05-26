import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isDroped, toggle}) => {
    return (
        <div className={isDroped 
        ? 'grid grid-rows-4 text-center text-white bg-purple-900' 
        : 'hidden'}
        onClick={toggle}
        >
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/About">About</Link>
                <Link className="p-4" to="/Menu">Services</Link>
                <Link className="p-4" to="/Contact">Contact</Link>
            </div>
    )
}

export default Dropdown
