import React, {Fragment} from 'react';
import "./index.css"

const Navbar = () => {
    return (
        <Fragment>
            <nav className={'navbar navbar-expand-lg topbar'}>
                <div className={'container'}>
                    <a className={'navbar-brand'} href={'#'}>
                      NavBar
                    </a>
                    <button className={'navbar-toggler'} type={'button'} data-toggle={'collapse'} data-target={'#navbarNav'} aria-controls={'navbarNav'} aria-expanded={'false'} aria-label={'Toggle navigation'}>
                        <span style={{ color:'white' }} className={'navbar-toggler-icon'}></span>
                    </button>
                    <div className={'collapse navbar-collapse'} id={'navbarNav'}>
                        <ul className={'navbar-nav ml-lg-auto'}>
                            <li className={'nav-item active'}>
                                <a className={'nav-link'} href={'#'}>Home <span className={'sr-only'}>(current)</span></a>
                            </li>
                            <li className={'nav-item'}>
                                <a className={'nav-link'} href={'#'}>Features </a>
                            </li>
                            <li className={'nav-item'}>
                                <a className={'nav-link'} href={'#'}>Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
