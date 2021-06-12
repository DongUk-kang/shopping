import React, {Fragment} from 'react';
import './index.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg topbar">
                <div className="container">
                    <Link style={{fontSize: "30px"}} class="navbar-brand" to="/"><span
                        className="logo">dong</span><strong>uk</strong></Link>
                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item mr-lg-4 my-2">
                                <i className="material-icons">search</i>
                            </li>
                            <li className="nav-item mr-lg-4 my-2">
                                <a href="#">
                                    <i className="material-icons">add_shopping_cart</i> <strong
                                    style={{color: "#FF9900"}}>10</strong>
                                </a>
                            </li>
                            <li className="nav-item mr-lg-4 my-2">
                                <div className="dropdown">
                                    <a style={{background: "#000000", border: "none"}}
                                       className="btn btn-dark txt-dark dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                        More
                                    </a>
                                    <div className="dropdown-menu bg-dark cutomColor"
                                         aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Login</a>
                                        <a className="dropdown-item" href="#">Seller Login</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-light text-dark customShadow mb-3">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item secondNavItem">
                                <div className="dropdown">
                                    <a className="btn btn-light text-dark dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                        Mobile & Accessoris
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Login</a>
                                        <a className="dropdown-item" href="#">Seller Login</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className="nav-item btn btn-light" to="/product">
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-item btn btn-light" to="/product/details">
                                    ProductDetails
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-item btn btn-light" to="/signin">
                                    Signin
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-item btn btn-light" to="/signup">
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
