import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ReserverSeance() {
    return (
        <NavLink to="/tarifs" className="button button--bookmark">Réserver une séance</NavLink>
    )
}