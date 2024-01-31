import React from 'react';

import ReserverSeance from '../components/ReserverSeance';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

const images = require.context('../assets/4_Enfants_Bébés/', true);
const imageList = images.keys().map(image => images(image));

export default function EnfantsBebe() {
        
    document.title = "Enfants / Bébés — Photographie by Mathilde";
    
    return (
        <>
            <div className="page page--enfantsbebes">
                <h1>Enfants / Bébés (à partir de 6 mois)</h1>
                <p>Dès que bébé tient assis c'est le moment idéal pour réaliser une belle séance photos, plein de petites mimiques adorables et des sourires à tout va ! On peut varier les positions, et faire plein de belles choses ! C'est une de mes séances préférées !</p>
                <p>Elle peut se dérouler en studio, où je dispose d'un large choix de décors avec des thèmes différents ou en extérieur dans des lieux adaptés selon les saisons, il y a tellement de beaux endroits chez nous !...</p>
                <p>J'ai également des accessoires adaptés à chaque âge, et quelques tenues pour les 6-12 mois. Elles seront à disposition au studio, mais il sera nécessaire d'en prévoir au moins une à lui et je vous guiderai sur le choix.</p>
                <p>J'aime créer de belles mises en scènes mais j'aime aussi la simplicité, alors nous préparerons ensemble la séance selon vos envies et vos préférences.</p>
                <p>Et pour les plus grands, on adaptera la séance en fonction de leurs âges.</p>
                <p>Si vous souhaitez que je photographie votre petit trésor, contactez moi dès ses premiers mois pour prendre rendez-vous.</p>
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