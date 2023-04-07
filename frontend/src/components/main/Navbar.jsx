import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
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
                            <Link class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="homepage">Home</Link>
                            </Link>
                            <li class="nav-item">
                                <Link class="nav-link" to="signup">SignUp</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="signin">SignIn</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled"
                                >Disabled</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar