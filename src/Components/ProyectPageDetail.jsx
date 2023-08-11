import React, { useState, useEffect } from 'react';
import { DetailSection } from '../Styles/ProyectsPageBox';
import { ModalContainer, GalleryContent, GallerySection,FaTimesIcono,FaAngleLeftIcono, FaAngleRightIcono, FaArrowLeftIcono} from '../Styles/ProductDetailComponents';
import {galleryPage} from '../mocks/proyects.js';


const ProyectPageDetail = ({ productSelected, onClose }) => {
    const initialProjectIndex = galleryPage.findIndex(p => p.id === productSelected);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialProjectIndex);
    const proyect = galleryPage[currentImageIndex];

    const handleNext = () => {
        if (currentImageIndex < galleryPage.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    useEffect(() => {
        setCurrentImageIndex(initialProjectIndex);
    }, [productSelected]);

    return (
        <>  
         
            {
                proyect &&
                (
                    <ModalContainer>
                         {/* icono de la flecha izq para mobile  */}
                         <FaArrowLeftIcono onClick={onClose}/>
                        
                        <GalleryContent>
                            {/* Gallery section */}
                            <GallerySection>
                                <FaAngleLeftIcono onClick={handlePrev}/>
                                {
                                    proyect.video ? (
                                        <iframe
                                            src={proyect.video}
                                            width="1640"
                                            height="660"
                                            frameborder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    ) : (
                                        <img src={proyect.image} alt={proyect.title} />
                                    )
                                }
                                <FaAngleRightIcono onClick={handleNext}/>
                            </GallerySection>
                            {/* Details section */}
                            <DetailSection>
                                <h2>{proyect.title}</h2>
                                <p>Country: {proyect.country}</p>
                                {proyect.network && <p>Network: {proyect.network}</p>}
                                {proyect.genre && <p>Genre: {proyect.genre}</p>}
                                {proyect.episodes && <p>Episodes: {proyect.episodes}</p>}
                                {proyect.season && <p>Season: {proyect.season}</p>}
                                {proyect.location && <p>Location: {proyect.location}</p>}
                                {proyect.days && <p>Days: {proyect.days}</p>}
                                {proyect.liveEvent && <p>Live Stream: {proyect.liveEvent}</p>}
                                {proyect.streamLiveEvent && <p>Stream Live Event: {proyect.streamLiveEvent}</p>}
                            </DetailSection>
                            <FaTimesIcono onClick={onClose}/>
                        </GalleryContent>
                    </ModalContainer>
                )
            }
        </>
    )
}

export default ProyectPageDetail;
