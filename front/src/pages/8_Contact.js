import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Map from '../components/Map';

export default function Contact() {
        
    document.title = "Contact — Photographie by Mathilde";   

    const [mail, setMail] = useState({
        objet: '',
        seance: '',
        motif: '',
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        message: ''
    })

    const testMode = false;
    let url

    if (testMode) {
        url = process.env.REACT_APP_API_URL_TEST
    }
    else {
        url = process.env.REACT_APP_API_URL
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log(url + 'contact')
        fetch('http://' + url + 'contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(mail)
        
        })
        .then((res) => res.json())
        .catch(() => {
            alert('Une erreur est survenue, veuillez réessayer plus tard.')
        })
    
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        if (name === "objet" && value === "reserver" && mail.seance === "autre") {
            setMail({...mail, seance: "", [name]: value});
        }
        else {
            setMail({...mail, [name]: value});
        }
    }

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
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="objet" >Sélectionnez le motif de votre demande :</label>
                    <select name="objet" id="objet" value={mail.objet} onChange={(evt) => handleChange(evt)} >
                        <option value="">-- Merci de choisir une option --</option>
                        <option value="reserver">Réserver une séance</option>
                        <option value="info">Demande d'informations</option>
                        <option value="partenariat">Partenariat commercial</option>
                        <option value="autre">Autre</option>
                    </select>
                    <br />
                    <div hidden={(mail.objet === "reserver" || mail.objet === "info") ? false : true}>
                    <label htmlFor="seance">Votre demande concerne la séance :</label>
                        <select name="seance" id="seance" value={(mail.seance === "autre" && mail.objet === "reserver") ? "" : mail.seance} onChange={(evt) => handleChange(evt)} >
                        {/* <select name="seance" id="seance" value={mail.seance} onChange={(evt) => handleChange(evt)} > */}
                            <option value="">-- Merci de choisir une séance --</option>
                            <option value="grossesse">Grossesse</option>
                            <option value="nouveau-nes">Nouveau-nés</option>
                            <option value="forfait">Forfait grossesse + nouveau-nés</option>
                            <option value="enfants-bebes">Enfants / bébés</option>
                            <option value="1er-anniversaire">1er anniversaire</option>
                            <option value="famille">Famille</option>
                            <option value="autre" hidden={(mail.objet === "info") ? false : true}>Autre</option>
                        </select>
                    </div>
                    <div hidden={(mail.objet === "partenariat" || mail.objet === "autre") ? false : true}>
                        <label htmlFor="motif">Objet de votre demande :</label>                    
                        <input type="text" name="motif" id="motif" value={mail.motif} onChange={(evt) => handleChange(evt)} />
                    </div>
                    <br />
                    <div style={{visibility:(mail.objet === "partenariat" || mail.objet === "autre" || mail.seance !== "") ? "visible" : "hidden" }}>
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" name="nom" id="nom" value={mail.nom} onChange={(evt) => handleChange(evt)} />
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" name="prenom" id="prenom" value={mail.prenom} onChange={(evt) => handleChange(evt)} />
                        <br />
                        <label htmlFor="telephone">Téléphone :</label>
                        <input type="text" name="telephone" id="telephone" value={mail.telephone} onChange={(evt) => handleChange(evt)} />
                        <label htmlFor="email">Adresse mail :</label>
                        <input type="email" name="email" id="email" value={mail.email} onChange={(evt) => handleChange(evt)} />
                        <p>Merci de compléter ces champs. Ces informations me permettront simplement de répondre à votre demande et ne seront en aucun cas conservées ni vendues à un tiers.</p>
                        <br />
                        <label htmlFor="message">Écrivez votre message :</label>
                        <br />
                        <textarea name="message" id="message" cols="30" rows="10" value={mail.message} onChange={(evt) => handleChange(evt)}></textarea>
                        <br />
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        </>
    )
}