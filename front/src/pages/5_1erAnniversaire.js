import React from 'react';

import ReserverSeance from '../components/ReserverSeance';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

const images = require.context('../assets/5_1er_anniversaire/', true);
const imageList = images.keys().map(image => images(image));

export default function PremierAnniversaire() {
        
    document.title = "1er anniversaire — Photographie by Mathilde";
    
    return (
        <>
            <div className="page page--1eranniversaire">
                <h1>1er Anniversaire</h1>
                <p>Sa première bougie est une étape très importante, autant pour bébé que pour ses parents (plus pour les parents des fois ah ah !), et oui notre bébé grandit, il devient de plus en plus autonome, il est de plus en plus curieux, il aime découvrir... Et il va nous le montrer !</p>
                <p>Je fais réaliser de superbes et délicieux gâteaux par ma partenaire pâtissière, je crée une jolie déco d'anniversaire sur un thème que nous choisirons ensemble, et on laisse faire bébé avec le gâteau... Vous vous imaginez la suite...! On touche, on goûte, on sent et souvent c'est vraiment très très drôle ! Rassurez-vous, on prendra quelques photos avant le gâteau car, comme vous pouvez vous en douter, après il y en a partout (ou pas !, ça dépend des bébés !). Mais attention pas de gaspillage, vous repartirez ensuite avec, si vous le souhaitez.</p>
                <p>Cette séance c'est vraiment trop marrant et ça permet de garder de merveilleux souvenirs de son 1er anniversaire...</p>
                <p>Si vous voulez que bébé vienne fêter sa 1ère bougie en photo contactez moi dès ses 6 mois pour réserver. </p>
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