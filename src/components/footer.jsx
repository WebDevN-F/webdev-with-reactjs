import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
    return (
        <footer className="d-flex flex-column text-center">
            <p>React v. {React.version}</p>

            {location.pathname !== '/' ? <Link to="/">Go Back </Link> : <Link to="/about">About</Link>}
        </footer>
    )
}

export default Footer