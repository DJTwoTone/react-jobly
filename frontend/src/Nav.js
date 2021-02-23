import React from 'react';
import { NavLink, Link } from 'react-router-dom';


//needs to be refactored for loggedin or not
function Nav() {


    return (
        <nav className="Navigation navbar">
            <Link className="navbar-brand" to='/'>
                JOBLY
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/companies'>
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/jobs'>
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/signup'>
                        Signup
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>
                        Logout
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;