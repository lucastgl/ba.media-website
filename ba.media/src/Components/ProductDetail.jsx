import React, { useState, useEffect } from 'react';
import { ModalContainer, GalleryContent, GallerySection, DetailSection,FaTimesIcono,FaAngleLeftIcono, FaAngleRightIcono,FaArrowLeftIcono} from '../styles/ProductDetailComponents';
import {gallery} from '../mocks/proyects.js';
//import {FaAngleRight, FaAngleLeft, FaTimes} from "react-icons/fa"


const ProductDetail = ({ productSelected, onClose }) => {
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
                            {/* Details section */}
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

export default ProductDetail;
