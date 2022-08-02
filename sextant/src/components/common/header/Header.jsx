import React from 'react';
import { Navbar } from '../../common';

import './Header.css'

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">Sextant</a>

                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__subtitle">
                    Cisco Software Engineering
                </section>
            </section>
        </section>
    )

}

export default Header;