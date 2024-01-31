import React from 'react';

import ReserverSeance from '../components/ReserverSeance';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

const images = require.context('../assets/2_Grossesse/', true);
const imageList = images.keys().map(image => images(image));

export default function Grossesse() {
    
    document.title = "Séance grossesse — Photographie by Mathilde";
    
    return (
        <>
            <div className="page page--grossesse">
                <h1>Séance grossesse</h1>
                <p>L'idéal pour réaliser cette séance est au cours du 7ème mois, le ventre est bien rond, maman pas trop fatiguée et il y a aussi beaucoup moins de risques de rater sa séance si bébé arrive un peu avant... Les photos peuvent se dérouler en intérieur ou extérieur au choix, et on discutera avant du thème, style, tenues, lieux... Elles peuvent se faire seule, en couple ou en famille.</p>
                <p>N'ayez aucune crainte, l'ambiance est détendue ! Je suis là pour vous mettre à l'aise et vous guider de A à Z sur les poses, le regard, l'expression du visage...</p>
                <p>Mon métier c'est vous mettre en valeur vous et vos jolies courbes pour créer ces superbes souvenirs si importants dans la vie d'une femme.</p>
                <p>Afin de vous sentir encore plus belle que vous ne l'êtes déjà, je mets à disposition des mamans un large choix de tenues, accessoires et jolies robes de grossesse que vous pourrez choisir avant la séance ; encore une fois, je serai là pour vous conseiller. J'ai également quelques robes assorties à maman pour les petites filles. Vous pouvez aussi amener des tenues ou accessoires personnels, si vous le souhaitez !</p>
                <p>Parce qu'elle est propre à chacune, je m'adapterai aussi à votre pudeur... Je réalise avec les femmes enceintes des photos avec de superbes robes et voilages mais aussi des photos un peu plus dénudées, ou du totalement nu pour un rendu très naturel et pur, vous pouvez me faire part de vos envies ou préférences pendant nos échanges.</p>
                <p>Une fois le rendez-vous pris, je vous enverrai un guide pour vous aider à préparer votre séance.</p>
                <p>Pour être sûre d'avoir des disponibilités, les réservations peuvent s'effectuer dès la fin de votre 1er trimestre. Un acompte vous sera demandé pour valider votre réservation.</p>
                <p>Voilà pour les points importants, si vous avez d'autres questions surtout n'hésitez pas à revenir vers moi !</p>
            </div>
            <ReserverSeance />
            <div className="carousel-box">
                <CCarousel controls indicators>
                    {imageList.map((image, index) => (
                        <CCarouselItem>
                            <CImage key={index} className="d-block w-100" src={image} alt={`image-${index}`} />
                        </CCarouselItem>
                    ))}
                </CCarousel>
            </div>
        </>
    )
}