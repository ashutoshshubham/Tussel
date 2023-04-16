import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
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
                                <Link class="nav-link" to='all_details'
                                >All Details</Link>
                            </li>
                        </ul>

                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <Link class="nav-link" to="signin">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="signup">SignUp</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar