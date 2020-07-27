import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Cristoflix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
