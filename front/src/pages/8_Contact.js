import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Map from '../components/Map';

export default function Contact() {
        
    document.title = "Contact — Photographie by Mathilde";   

    return (
        <div className="page page--contact">
            <h1>Contact</h1>
            <p>Contactez-nous pour toute demande de renseignements ou de services ! Nous sommes là pour vous aider et répondre à toutes vos questions. Je suis impatiente de vous aider et de vous fournir le meilleur service possible !</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> contact@photographiebymathilde.fr</p>
            <p><FontAwesomeIcon icon={faPhone} /> 07 87 17 17 60</p>
            <p>Les séances se déroulent à Frontignan, près de Sète, dans l'Hérault (34).</p>
            <Map />
        </div>
    )
}