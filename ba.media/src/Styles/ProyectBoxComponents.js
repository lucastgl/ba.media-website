import styled from "styled-components"

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; // Asegura que la imagen cubra todo el contenedor sin deformarse
    transition: transform 0.3s ease-in-out; // Añade una transición suave al efecto de zoom
`;

export const Container = styled.div`
    margin: 10px 20px;
    cursor: pointer;
    
    &:hover ${Image} { // Al hacer hover en el contenedor, se aplica el efecto de zoom a la imagen
        transform: scale(1.1); // Aumenta el tamaño de la imagen en un 10%
    }
`;

export const ImageContainer = styled.div`
    width: 372px;
    height: 496px;
    overflow: hidden; // Oculta cualquier parte de la imagen que se desborde debido al zoom
`;

export const Title = styled.p`
    font-family: 'Inter Tight', sans-serif;
    font-weight: 700;
    color: #091405;
    font-size: 2rem;
    margin-top: 10px;
`;

export const InfoText = styled.p`
    font-family: 'Inter Tight', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #3D9BE9;
`;


