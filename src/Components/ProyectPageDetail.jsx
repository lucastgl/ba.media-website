import React, { useState, useEffect ,useContext } from 'react';
import { DetailSection } from '../Styles/ProyectsPageBox';
import { ModalContainer, GalleryContent, GallerySection,FaTimesIcono,FaAngleLeftIcono, FaAngleRightIcono, FaArrowLeftIcono} from '../Styles/ProductDetailComponents';
import {galleryPage} from '../mocks/proyects.js';
import { LenguageContext } from '../Context/LanguagesContext';



const ProyectPageDetail = ({ productSelected, onClose }) => {
    const initialProjectIndex = galleryPage.findIndex(p => p.id === productSelected);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialProjectIndex);
    const proyect = galleryPage[currentImageIndex];
    const {state} = useContext(LenguageContext);

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
                        <FaArrowLeftIcono onClick={onClose}/>
                        
                        <GalleryContent>
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
                                            autoplay="true"
                                            allowfullscreen
                                        ></iframe>
                                    ) : (
                                        <img src={proyect.image} alt={proyect.title} />
                                    )
                                }
                                <FaAngleRightIcono onClick={handleNext}/>
                            </GallerySection>
                            <DetailSection>
                                <h2>{proyect.title}</h2>
                                <p>
                                    {state.lenguage 
                                        ? 
                                        proyect.pais
                                        :
                                        proyect.country
                                    }
                                </p>
                                {proyect.network && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Canal/Plataforma: {proyect.network}</>
                                        :
                                        <>Network: {proyect.network}</> 
                                    }
                                </p>}
                                {proyect.genre && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Género: {proyect.genre}</> 
                                        :
                                        <>Genre: {proyect.genre}</> 
                                    }
                                </p>}
                                {proyect.episodes && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Episodios: {proyect.episodes}</> 
                                        :
                                        <>Episodes: {proyect.episodes}</> 
                                    }
                                </p>}
                                {proyect.season && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Temporadas: {proyect.season}</> 
                                        :
                                        <>Season: {proyect.season}</> 
                                    }
                                </p>}
                                {proyect.location && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Ubicación: {proyect.location}</> 
                                        :
                                        <>Location: {proyect.location}</> 
                                    }
                                </p>}
                                {proyect.days && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Dias: {proyect.days}</> 
                                        :
                                        <>Days: {proyect.days}</> 
                                    }
                                </p>}
                                {proyect.liveEvent && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Transmisión en vivo: {proyect.liveEvent}</> 
                                        :
                                        <>Live Stream: {proyect.liveEvent}</> 
                                    }
                                </p>}
                                {proyect.streamLiveEvent && 
                                <p>
                                    {state.lenguage 
                                        ? 
                                        <>Evento en vivo: {proyect.streamLiveEvent}</> 
                                        :
                                        <>Stream Live Event: {proyect.streamLiveEvent}</> 
                                    }
                                </p>}
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
