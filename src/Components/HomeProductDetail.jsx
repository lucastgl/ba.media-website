import React, { useState, useEffect } from 'react';
import { ModalContainer, GalleryContent, GallerySection, DetailSection,FaTimesIcono,FaAngleLeftIcono, FaAngleRightIcono,FaArrowLeftIcono} from '../Styles/ProductDetailComponents';
import {gallery} from '../mocks/proyects.js';


const HomeProductDetail = ({ productSelected, onClose }) => {
    const initialProjectIndex = gallery.findIndex(p => p.id === productSelected);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialProjectIndex);
    const proyect = gallery[currentImageIndex];

    const handleNext = () => {
        if (currentImageIndex < gallery.length - 1) {
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
                        <FaArrowLeftIcono onClick={()=>{onClose}}/> 
                       
                        <GalleryContent>
                            <GallerySection>
                                <FaAngleLeftIcono onClick={()=>{handlePrev}}/>
                                {
                                    proyect.video ? (
                                        <iframe
                                            src={proyect.video}
                                            width="1340"
                                            height="560"
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
                            <DetailSection>
                                <h2>{proyect.title}</h2>
                                <p>Country: {proyect.country}</p>
                                <p>Episodes: {proyect.episodes}</p>
                            </DetailSection>
                            <FaTimesIcono onClick={onClose}/>
                        </GalleryContent>
                    </ModalContainer>
                )
            }
        </>
    )
}

export default HomeProductDetail;
