import React from 'react';

import ReserverSeance from '../components/ReserverSeance';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

const images = require.context('../assets/6_Famille/', true);
const imageList = images.keys().map(image => images(image));

export default function Famille() {
        
    document.title = "Famille — Photographie by Mathilde";
    
    return (
        <>
            <div className="page page--famille">
                <h1>Famille</h1>
                <p>Cette séance peut se réaliser en studio ou en extérieur. Chez nous, les beaux endroits ne manquent pas (oui oui, je suis amoureuse de ma région natale 😉) ! Et il n'y a pas d'âge pour créer de magnifiques clichés en famille, de 0 à 99 ans laissez vous tenter !</p>
                <p>L'importance de ces clichés... Que vous pourrez regarder tout au long de votre vie, elles feront partie de votre patrimoine familial et traverseront les générations. Que ce soit parents et enfants, avec les grands-parents, entre mère et fille, entre sœurs, en couple... Bref on rigole et on passe toujours un bon moment ! </p>
                <p>N'ayez crainte même si vous n'avez jamais fait de séance photo, pas besoin d'être à l'aise devant un objectif ! Je mettrai en œuvre mon savoir-faire en vous guidant pendant tout son déroulement. Pour avoir des photos remplies de joie, d'amour et d'émotion !</p>
                <p>Une jolie séance pour immortaliser de précieux instants.</p>
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