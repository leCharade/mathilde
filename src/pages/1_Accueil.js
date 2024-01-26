import React from 'react';
import image1 from '../assets/2_Grossesse/294750092_5592332124164161_2658708411760669555_n.jpg';
import image2 from '../assets/3_Nouveau-nés/380886519_792620476207436_3185736384840187227_n.jpg';
import image3 from '../assets/6_Famille/398138821_824033209732829_1608121783406124137_n.jpg';
import image4 from '../assets/4_Enfants_Bébés/981062_10202732837425112_2096818334_o.jpg';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

export default function Accueil() {

    document.title = "Photographie by Mathilde — Un Jour, Une Histoire";
    
    return (
        <div>
            <section className="introduction">
                <div className="alpha-grey"></div>
                <div className="introduction__welcome">
                    <h1>Bienvenue</h1>
                    <p>Je suis Mathilde, photographe professionnelle spécialisée dans la maternité, les nouveau-nés et les bébés... J'aime également photographier les couples et vos familles.</p>
                </div>
            </section>
            <section className="works">
                <h2>J'aime la vie, j'aime mon métier, et je le fais avec amour et passion ! Maintenant vous en savez un peu plus sur moi, je vous laisse découvrir mon travail...</h2>
                {/* <div className="works__photos">
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />
                </div> */}
                <CCarousel controls indicators>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={image1} alt="slide 1" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={image2} alt="slide 2" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={image3} alt="slide 3" />
                    </CCarouselItem>
                </CCarousel>
            </section>
            {/* <section className="about">
                <img src={image4} />
                <div className="about__text">
                    <p className="about__intro">Au bout de cette superbe année nous sommes rentrés en France et nous avons repris notre vie normale et notre boulot. Retour à la réalité ! Autant vous dire que psychologiquement ça n’a pas été facile…</p>
                    <p>Heureusement, quelques mois après notre retour, nous apprenons une merveilleuse nouvelle, un petit bébé était en train de grandir dans mon ventre. Une petite princesse a vu le jour 9 mois après. Une nouvelle aventure qui démarrait, encore plus extraordinaire... Devenir Maman ! Ce nouveau rôle qui a complètement boulversé ma vie ! La naissance d’un enfant c’est vraiment quelque chose d’indescriptible, un nouveau sentiment qui vous inonde d’amour... Et 2 ans et demi après une seconde merveille pointe le bout de son nez, pour ajouter encore plus d’amour à notre petite famille... Maman et femme comblée, c’est à ce moment là que je décide de changer de métier et d’allier deux choses que j’aimais, la photo et les bébés ! Après pas mal de temps passé à me former et de travail acharné, je suis devenue photographe professionnelle et je me suis spécialisée dans la prise de vue artistique de la femme enceinte, des nouveau-nés et des bébés.</p>
                </div>
            </section> */}
            <section className="quotations">
                <div className="alpha-grey"></div>
                <div className="quotations__quotes">
                    <p>Une photographe exceptionnelle, qui a su sublimer la beauté de ma femme et de notre premier enfant. Je ne pourrai jamais assez la recommander.</p>
                    <p className="quotations__author">Tom Tournillon</p>
                </div>
            </section>
        </div>
    )
}