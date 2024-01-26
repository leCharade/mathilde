import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Tarifs() {
    
    document.title = "Tarifs — Photographie by Mathilde";
    
    return (
        <div className="page page--tarifs">
            <h1>Tarifs</h1>
            <p>Chacune de mes séances est réalisée avec soin, créativité et amour. Je mets tout en œuvre pour vous offrir des expériences photo uniques et personnalisées.</p>
            <p>Voici le détail et les tarifs de mes prestations.</p>
            <section className="liste-tarifs">
                <article className="cardfee">
                    <h2>Séance grossesse</h2>
                    <ul>
                        <li>Séance photo d'environ une heure (en studio ou en extérieur)</li>
                        <li>Le savoir-faire de votre photographe</li>
                        <li>10 fichiers numériques HD</li>
                        <li>Tri et retouches soignées de vos images</li>
                        <li>Prêt de tenues et accessoires</li>
                        <li>Galerie en ligne pour le choix de vos photos</li>
                    </ul>
                    <div className="tarif">
                        <div>160 €</div>
                        <NavLink to="/contact" className="button button--tarif">Réserver</NavLink>
                    </div>
                </article>
                <article className="cardfee">
                    <h2>Séance nouveau-nés</h2>
                    <ul>
                        <li>Séance photo d'environ trois heures (en studio)</li>
                        <li>Le savoir-faire de votre photographe</li>
                        <li>10 fichiers numériques HD</li>
                        <li>Tri et retouches soignées de vos images</li>
                        <li>Prêt de tenues et accessoires</li>
                        <li>Galerie en ligne pour le choix de vos photos</li>
                    </ul>
                    <div className="tarif">
                        <div>280 €</div>
                        <NavLink to="/contact" className="button button--tarif">Réserver</NavLink>
                    </div>
                </article>
                <article className="cardfee">
                    <h2>Séance enfants bébés <br />
                    <p className="title-info">(à partir de 6 mois)</p></h2>
                    <ul>
                        <li>Séance photo d'environ une heure (en studio ou en extérieur)</li>
                        <li>Le savoir-faire de votre photographe</li>
                        <li>10 fichiers numériques HD</li>
                        <li>Tri et retouches soignées de vos images</li>
                        <li>Prêt de tenues et accessoires</li>
                        <li>Galerie en ligne pour le choix de vos photos</li>
                    </ul>
                    <div className="tarif">
                        <div>160 €</div>
                        <NavLink to="/contact" className="button button--tarif">Réserver</NavLink>
                    </div>
                </article>
                <article className="cardfee">
                    <h2>Séance 1er anniversaire</h2>
                    <ul>
                        <li>Séance photo d'environ une heure (en studio)</li>
                        <li>Le savoir-faire de votre photographe</li>
                        <li>10 fichiers numériques HD</li>
                        <li>Tri et retouches soignées de vos images</li>
                        <li>Prêt de tenues et accessoires</li>
                        <li>Gâteau d'anniversaire créé par une pâtissière</li>
                        <li>Décor à thème</li>
                        <li>Galerie en ligne pour le choix de vos photos</li>
                    </ul>
                    <div className="tarif">
                        <div>210 €</div>
                        <NavLink to="/contact" className="button button--tarif">Réserver</NavLink>
                    </div>
                </article>
                <article className="cardfee">
                    <h2>Séance famille</h2>
                    <ul>
                        <li>Séance photo d'environ une heure (en studio ou en extérieur)</li>
                        <li>Le savoir-faire de votre photographe</li>
                        <li>10 fichiers numériques HD</li>
                        <li>Tri et retouches soignées de vos images</li>
                        <li>Galerie en ligne pour le choix de vos photos</li>
                    </ul>
                    <div className="tarif">
                        <div>160 €</div>
                        <NavLink to="/contact" className="button button--tarif">Réserver</NavLink>
                    </div>
                </article>
            </section>
            <section className="tarifs-options">
                <div className="options-title">
                    <div className="bar"></div>
                    <h2>Options</h2>
                    <div className="bar"></div>
                </div>
                <h3>Fichiers numériques supplémentaires</h3>
                <ul>
                    <li>1 photo : 15 €</li>
                    <li>5 photos : 60 €</li>
                    <li>10 photos : 100 €</li>
                    <li>L'intégralité de la galerie : 150 €</li>
                </ul>
                <h3>Tirages et agrandissements</h3>
                <ul>
                    <li>13×18cm : 3 €</li>
                    <li>20×30cm : 10 €</li>
                    <li>30×40cm : 18 €</li>
                    <li>40×60cm : 32 €</li>
                </ul>
                <h3>Album photo qualité professionnelle</h3>
                <ul>
                    <li>Format 20×20cm : 100 €</li>
                    <li>Format 30×30cm : 120 €</li>
                </ul>
                <h3 className="other-options">Informations complémentaires</h3>
                <ul className="other-options-list">
                    <li>Possibilité autres formats ou produits (devis sur demande)</li>
                    <li>Bons cadeaux disponibles pour tous types de séances</li>
                    <li className="paiement3x">Paiement en 2 ou 3 fois acceptés</li>
                    <li>Modes de paiement acceptés : espèces, chèque, virement bancaire ou PayPal</li>
                </ul>
            </section>
        </div>
    )
}