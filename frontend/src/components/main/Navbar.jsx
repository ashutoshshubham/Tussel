import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import '../../App.css'
import { useUserContext } from '../../context/UserProvider';
import { useState } from 'react';

const Navbar = () => {

    const { loggedIn, setLoggedIn, logout } = useUserContext();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const showLoggedIn = () => {
        if (!loggedIn) {
            return (
                // <ul className="navbar-nav">
                <>
                    {/* <li className="nav-item"> */}
                    <NavLink className="nav-link" aria-current="page" to="/signin">

                        <button type="button" className="btn btn-success me-3 mb-1">
                            Login
                        </button>
                    </NavLink>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                    <NavLink className="nav-link" aria-current="page" to="/signup">
                        <button type="button" className="btn btn-success me-3 mb-1">
                            SignUp
                        </button>
                    </NavLink>
                    {/* </li> */}
                </>
                // </ul >

            );
        }
    }

    const showLogout = () => {
        if (loggedIn) {
            return (
                <ul className="navbar-nav">
                    {/* // <li className="nav-item"> */}
                    {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button> */}
                    <button type="button" className="btn btn-primary me-3 mb-2" onClick={logout}>
                        LogOut
                    </button>
                    {/* // </li> */}
                </ul>
            );
        }
    }




    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" to="homepage"><b>TUSSEL</b></Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                      
                    <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="homepage">Home
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to='organisationPro'
                                    >Organisation Profile</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to='Competition_det_entry'
                                    >Competition</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to='feedback'
                                    >Feedback</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to={'/view_details'}
                                    >View Details</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to={'/competitionEntry'}
                                    >Competition</Link>
                                </li>
                            </ul>


                        {showLoggedIn()}
                        {showLogout()}

                        {/* <ul class="navbar-nav">

                            <li class="nav-item">
                                <Link class="nav-link" to="signin">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="signup">SignUp</Link>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar