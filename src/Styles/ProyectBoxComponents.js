import styled from "styled-components"

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.3s ease-in-out; // Añade una transición suave al efecto de zoom
`;

export const Container = styled.div`
    margin-right:20px;
    margin-bottom:30px;
    width:165px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        margin-bottom:70px;
        width:345px;
        h3{
            margin-top:20px;
            font-size:25px;
            margin-left:0px;
            font-family: 'Inter Tight', sans-serif;
        }
        &:hover ${Image} { // Al hacer hover en el contenedor, se aplica el efecto de zoom a la imagen
            transform: scale(1.1); // Aumenta el tamaño de la imagen en un 10%
        }
        
    }
    @media (min-width:1600px){
        margin-bottom:70px;
        width:365px;
        h3{
            margin-top:20px;
            font-size:25px;
            margin-left:0px;
            font-family: 'Inter Tight', sans-serif;
        }
        &:hover ${Image} { // Al hacer hover en el contenedor, se aplica el efecto de zoom a la imagen
            transform: scale(1.1); // Aumenta el tamaño de la imagen en un 10%
        }
    }
`;

export const ImageContainer = styled.div`
    width:160px;
    height:215px;
    margin-left:5px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        width: 100%;
        height: 75vh;
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
    margin-left:7px;
    @media (min-width:1400px){
        font-size: 2rem;
        margin-left:7px;
    }
`;

export const InfoText = styled.p`
    font-size:14px;
    font-family: 'Inter Tight', sans-serif;
    font-weight: 700;
    color:#21A6F3;
    margin-left:7px;
`;


