import React from 'react';
import Logo from '../../assets/img/logo-main.png';
import './menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Cristoflix logo" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
