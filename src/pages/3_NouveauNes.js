import React from 'react';

import ReserverSeance from '../components/ReserverSeance';

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

const images = require.context('../assets/3_Nouveau-nés/', true);
const imageList = images.keys().map(image => images(image));

export default function NouveauNes() {
    return (
        <>
            <div className="page page--nouveaunes">
                <h1>Nouveau nés</h1>
                <div>
                    <p>Être photographe nouveau-nés est un art qui demande beaucoup de passion et d'amour pour son métier, énormément de patience, une excellente formation sur la physiologie de bébé et sa sécurité, un environnement sain et du matériel adapté.</p>
                    <p>La séance dure environ 3h afin de privilégier son bien-être... Bébé doit se sentir en totale confiance et suffisamment relaxé pour obtenir ces images emplies de sérénité et de douceur. On passe souvent plus de temps à apaiser bébé qu'à le photographier. On prend également le temps pour les tétées et pour se rendormir tranquillement afin que je puisse le positionner sereinement. Je profiterai aussi des phases d'éveil pour prendre quelques clichés yeux ouverts.</p>
                    <p>Il est nécessaire que votre enfant ait moins de 15 jours (sauf en cas de naissance prématurée). Les raisons sont physiologiques, esthétiques et pratiques. C'est la période où ils dorment beaucoup (presque 18 heures par jour), le corps de votre bébé n'étant pas encore tonique, il aura la mémoire des positions fœtales, que j'utilise beaucoup durant mes séances. Passé ces 15 jours, peuvent débuter les coliques qui risquent de le perturber. Et souvent s'ajoutent aussi les poussées d'acné du nourrisson…</p>
                    <p>Je photographie bébé tout seul mais aussi avec maman, papa et les aînés sont également les bienvenus. Il faudra me prévenir de leur présence afin que j'organise au mieux votre séance... 3h c'est beaucoup trop long pour eux, il est donc préférable qu'ils nous rejoignent un peu avant la fin (accompagnés par papa, par exemple) pour les photos fratrie et famille.</p>
                    <p>Voilà, maintenant vous en savez un peu plus sur le déroulement de cette séance.</p>
                    <p>Vous souhaitez que j'immortalise ce précieux moment des premiers jours de votre bébé ?</p>
                    <p>Pour des questions d'organisation, il est important de me contacter durant votre grossesse (idéalement dès le second trimestre) afin de me communiquer votre DPA (date prévue d'accouchement) pour réserver sa place. Ensuite il ne restera plus qu'à attendre que bébé pointe le bout de son nez, c'est à ce moment-là que nous fixerons le jour exact de la séance.</p>
                    <p>Ah oui, j'allais oublier... Toutes les tenues et tous les accessoires sont fournis, ce sont des produits fait main, fabriqués en France par des créatrices spécialisées, et des tissus adaptés à la peau sensible de vos bébés...</p>
                    <p>Si vous avez d'autres questions, n'hésitez pas à me contacter...</p>
                    <p>Au plaisir de rencontrer bientôt vos petites merveilles...!</p>
                </div>
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