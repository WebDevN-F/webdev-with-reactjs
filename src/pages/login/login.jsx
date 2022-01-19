import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div>
            <h1>Login page</h1>

            <Link to={process.env.PUBLIC_URL + '/'}>Back Home</Link>
        </div>
    )
}

export default Login
