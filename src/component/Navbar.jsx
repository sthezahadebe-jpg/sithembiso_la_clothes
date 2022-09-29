import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="rightSide">
                    <div className="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <img class="nav-img" src="banner-orignal-image.jpeg" />
                        <NavLink className="navbar-brand" to="/">
                            LA CLOTHES
                        </NavLink>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <br />
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/"><i className="bi bi-house"></i>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link btn btn-outline-white" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link btn btn-outline-white" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link btn btn-outline-white" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <div className='buttons'>
                                <NavLink to="/login" className="btn btn-outline-dark">
                                    <i className="fa fa-sign-in me-2"></i> Login</NavLink>
                                <NavLink to="register" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user-plus me-2"></i> Register</NavLink>
                                <NavLink to="cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-2"></i> Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;