import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [openMenu, setMenu] = useState(false);
    const [menuIcon, setMenuIcon] = useState(faBars);

    function handleChangeMenu(e) {
        e.preventDefault();
        setMenu(!openMenu);
        if (openMenu) {
            setMenuIcon(faXmark);
        }
        else {
            setMenuIcon(faBars);
        }
    }

    return (
        <>
            <div className="background-block background-block__header">
                <header>
                    <img className="logo" src={logo} alt="Logo du site. Il y est écrit « Un jour, une histoire... » en style calligraphique, suivi en-dessous par « Photographie by Mathilde »."/>
                    <div className="menu-icon">
                        <FontAwesomeIcon icon={menuIcon} onClick={(e) => handleChangeMenu(e)}/>
                    </div>
                    <nav className={`${openMenu ? 'menu-open' : 'menu-closed'}`}>
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Accueil</NavLink></li>
                            <li><NavLink to="/grossesse" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Grossesse</NavLink></li>
                            <li><NavLink to="/nouveau-nes" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Nouveau-nés</NavLink></li>
                            <li><NavLink to="/enfants-bebe" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Enfants bébés</NavLink></li>
                            <li><NavLink to="/1er-anniversaire" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >1er anniversaire</NavLink></li>
                            <li><NavLink to="/famille" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Famille</NavLink></li>
                            <li><NavLink to="/tarifs" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Tarifs</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "activeSection" : undefined)} >Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="background-block background-block__margin-header">
            </div>
        </>
    )
}