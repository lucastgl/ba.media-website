import styled from "styled-components"

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    //object-fit: cover; // Asegura que la imagen cubra todo el contenedor sin deformarse
    transition: transform 0.3s ease-in-out; // Añade una transición suave al efecto de zoom
`;

export const Container = styled.div`
    margin-right:20px;
    margin-bottom:30px;
    width:165px;
    @media (min-width:1400px){
        width:375px;
    }
    @media (min-width:1600px){
        width:375px;
        &:hover ${Image} { // Al hacer hover en el contenedor, se aplica el efecto de zoom a la imagen
            transform: scale(1.1); // Aumenta el tamaño de la imagen en un 10%
        }

    }
`;

export const ImageContainer = styled.div`
    width:160px;
    height:215px;
    margin-left:5px;
    @media (min-width:1400px){
        width: 372px;
        height: 496px;
        overflow: hidden;
    }
    @media (min-width:1600px){
        width: 372px;
        height: 496px;
        overflow: hidden; // Oculta cualquier parte de la imagen que se desborde debido al zoom
    }
`;

export const Title = styled.p`
    font-family: 'Inter Tight', sans-serif;
    font-weight: 700;
    color: #091405;
    margin-top: 10px;
    @media (min-width:1400px){
        font-size: 2rem;
    }
`;

export const InfoText = styled.p`
    font-size:14px;
    font-family: 'Inter Tight', sans-serif;
    font-weight: 700;
    color: #3D9BE9;
`;


