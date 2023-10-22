import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
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
        </div>
    )
}