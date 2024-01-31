import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Map from '../components/Map';

export default function Contact() {
        
    document.title = "Contact — Photographie by Mathilde";   

    return (
        <>
            <div className="page page--contact">
                <h1>Contact</h1>
                <p>Contactez moi pour toute demande de renseignements ou de services ! Je suis là pour répondre à toutes vos questions.</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> contact@photographiebymathilde.fr</p>
                <p><FontAwesomeIcon icon={faPhone} /> 07 87 17 17 60</p>
                <p>Studio situé à Frontignan, entre Sète et Montpellier dans l'Hérault (34).</p>
                <Map />
            </div>
            {/* <div>
                <form>
                    <label htmlFor="message">Écrivez votre message :</label>
                    <br />
                    <textarea name="message" id="message" cols="30" rows="10" ></textarea>
                    <br />
                    <input className="btn" type="submit" value="Envoyer" />
                </form>
            </div> */}
        </>
    )
}