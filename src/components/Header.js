import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <div className="background-block background-block__header">
                <header>
                    <img className="logo" src={logo} alt="Logo du site. Il y est écrit « Un jour, une histoire... » en style calligraphique, suivi en-dessous par « Photographie by Mathilde »."/>
                    <div className="menu-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li><NavLink to="/grossesse">Grossesse</NavLink></li>
                            <li><NavLink to="/nouveau-nes">Nouveau-nés</NavLink></li>
                            <li><NavLink to="/enfants-bebe">Enfants bébés</NavLink></li>
                            <li><NavLink to="/1er-anniversaire">1er anniversaire</NavLink></li>
                            <li><NavLink to="/famille">Famille</NavLink></li>
                            <li><NavLink to="/tarifs">Tarifs</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="background-block background-block__margin-header">
            </div>
        </>
    )
}