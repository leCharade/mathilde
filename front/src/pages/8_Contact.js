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

    let errorData

    function handleSubmit(evt) {
        evt.preventDefault();
        errorData = "Merci de compléter les données manquantes : ";

        if (mail.objet === "" || ((mail.objet === "reserver" || mail.objet === "info") && mail.seance === "") || ((mail.objet === "partenariat" || mail.objet === "autre") && mail.motif === "")) {
            errorData += `
            - Objet`
        }
        if (mail.nom === "") {
            errorData += `
            - Nom`
        }
        if (mail.prenom === "") {
            errorData += `
            - Prénom`
        }
        if (mail.telephone === "" && mail.email === "") {
            errorData += `
            - Méthode de contact`
        }
        if (mail.message === "") {
            errorData += `
            - Message`
        }

        console.log(errorData);

        if (errorData === "Merci de compléter les données manquantes : ") {
            fetch('http://' + url + 'contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(mail)
            
            })
            .then((res) => res.json())
            .then(() => {
                alert('Votre demande a bien été prise en compte !')
                setMail({
                    objet: '',
                    seance: '',
                    motif: '',
                    nom: '',
                    prenom: '',
                    telephone: '',
                    email: '',
                    message: ''
                })
            })
            .catch(() => {
                alert('Une erreur est survenue, veuillez réessayer plus tard.')
            })
        }
        else alert(errorData);
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
                <p>Vous avez également la possibilité de me contacter via le formulaire ci-dessous.</p>
                <div className="form-title">
                    <div className="bar"></div>
                    <h2>Formulaire de contact</h2>
                    <div className="bar"></div>
                </div>
                <div id="formulaire-contact">
                    <form onSubmit={(evt) => handleSubmit(evt)}>
                        <div className="form-line">
                            <label htmlFor="objet" >Sélectionnez le motif de votre demande :</label>
                            <select className="contact-list" name="objet" id="objet" value={mail.objet} onChange={(evt) => handleChange(evt)} >
                                <option value="">-- Merci de choisir une option --</option>
                                <option value="reserver">Réserver une séance</option>
                                <option value="info">Demande d'informations</option>
                                <option value="partenariat">Partenariat commercial</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>
                        <div className="form-line" hidden={(mail.objet === "reserver" || mail.objet === "info") ? false : true}>
                            <label htmlFor="seance">Votre demande concerne la séance :</label>
                            <select className="contact-list" name="seance" id="seance" value={(mail.seance === "autre" && mail.objet === "reserver") ? "" : mail.seance} onChange={(evt) => handleChange(evt)} >
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
                        <div className="form-line" hidden={(mail.objet === "partenariat" || mail.objet === "autre") ? false : true}>
                            <label htmlFor="motif">Objet de votre demande :</label>                    
                            <input className="contact-input contact-input--motif" type="text" name="motif" id="motif" value={mail.motif} onChange={(evt) => handleChange(evt)} />
                        </div>
                        <br />
                        <div style={{visibility:((mail.objet === "partenariat" || mail.objet === "autre" || mail.seance !== "") && mail.objet !== "") ? "visible" : "hidden" }}>
                            <div className="form-line">
                                <label htmlFor="nom">Nom :</label>
                                <input className="contact-input contact-input--nom" type="text" name="nom" id="nom" value={mail.nom} onChange={(evt) => handleChange(evt)} />
                                <label htmlFor="prenom">Prénom :</label>
                                <input  className="contact-input contact-input--prenom"type="text" name="prenom" id="prenom" value={mail.prenom} onChange={(evt) => handleChange(evt)} />
                            </div>
                            <div className="form-line">
                                <label htmlFor="email">Adresse mail :</label>
                                <input className="contact-input contact-input--email" type="email" name="email" id="email" value={mail.email} onChange={(evt) => handleChange(evt)} />
                                <label htmlFor="telephone">Téléphone :</label>
                                <input className="contact-input contact-input--telephone"type="text" name="telephone" id="telephone" value={mail.telephone} onChange={(evt) => handleChange(evt)} />
                            </div>
                            <p className="contact-info">Merci de compléter ces champs. Ces informations me permettront simplement de répondre à votre demande et ne seront en aucun cas conservées ni vendues à un tiers.</p>
                            <label htmlFor="message">Écrivez votre message :</label>
                            <br />
                            <textarea name="message" id="message" rows="8" value={mail.message} onChange={(evt) => handleChange(evt)}></textarea>
                            <br />
                            <input className="button button--contact" type="submit" value="Envoyer" />
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}