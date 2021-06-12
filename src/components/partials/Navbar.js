import React, {Fragment} from 'react';
import './index.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <nav className={'navbar navbar-expand-lg topbar'}>
                <div className={'container'}>
                    <a className={'navbar-brand'} href={'#'}>
                      NavBar
                    </a>
                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={'collapse navbar-collapse'} id={'navbarNav'}>
                        <ul className={'navbar-nav ml-lg-auto'}>
                            <li className={'nav-item active'}>
                                <Link className={'nav-link'} to={'/'}>Home <span className={'sr-only'}>(current)</span></Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link className={'nav-link'} to={'/'}>Features </Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link className={'nav-link'} to={'/'}>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
