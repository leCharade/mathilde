import React from 'react';

import ReserverSeance from '../components/ReserverSeance';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

const images = require.context('../assets/6_Famille/', true);
const imageList = images.keys().map(image => images(image));

export default function Famille() {
    return (
        <>
            <div className="page page--famille">
                <h1>Famille</h1>
                <p>Cette séance peut se réaliser en studio ou en extérieur. Chez nous, les beaux endroits ne manquent pas (oui oui, je suis amoureuse de ma région natale 😉) ! Et il n'y a pas d'âge pour créer de magnifiques clichés en famille, de 0 à 99 ans laissez vous tenter! C'est tellement important ces souvenirs...</p>
                <p>N'ayez crainte même si vous n'avez jamais fait de séance photo, c'est facile! Je mettrai en œuvre mon savoir-faire en vous guidant pendant tout son déroulement. </p>
                <p>Que ce soit parents/enfants, avec les grands-parents, mère/fille, entre sœurs, en couple... Bref on passe tout le temps un bon moment ! N'hésitez pas à prendre contact avec moi et à me faire part de vos envies !</p>
                <p>On réalisera ensemble une jolie séance pour immortaliser ces précieux instants.</p>
            </div>
            <ReserverSeance />
            <div className="carousel-box">
                <CCarousel controls indicators>
                    {imageList.map((image, index) => (
                        <CCarouselItem>
                            <CImage key={index} className="d-block w-100" src={image} alt={`image-${index}`} />
                            {console.log(image)}
                        </CCarouselItem>
                    ))}
                </CCarousel>
            </div>
        </>
    )
}