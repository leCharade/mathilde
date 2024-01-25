import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ReserverSeance() {
    return (
        <NavLink to="/tarifs" className="button"><div className="button button--bookmark">Réserver une séance</div></NavLink>
    )
}