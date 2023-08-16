import styled, {keyframes} from "styled-components";

const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(110px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;
export const H1 = styled.h1`
    margin-top:100px;
    color:#21A6F3;
    padding:10px;
    margin-left:15px;
    animation: ${InUp}  1s ease-out;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        font-size:5rem;
        margin-left:80px;
        padding:0px;
    }
    @media (min-width:1600px){
        font-size:64px;
        margin-left:333px;
        padding:0px;
    }
`
export const P = styled.p`
    color:#21A6F3;
    padding:10px;
    margin-bottom:20px;
    font-weight: bold;
    margin-left:15px;
    animation:   ${InUp}  1s ease-out;
    span{
        color:#FF0099;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        margin-left:80px;
        padding:0px;
    }
    @media (min-width:1600px){
        margin-bottom:40px;
        margin-left:336px;
        font-size:20px;
        padding:0px;
    }
`

export const GalleryBox =  styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin : 0 auto;
    margin-left:20px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        width: 1350px;
        grid-template-columns: repeat(3, 1fr);
        margin : 0 auto;
        cursor:pointer;
        margin-bottom:200px;
    }
    @media (min-width:1600px){
        width: 1230px;
        grid-template-columns: repeat(3, 1fr);
        margin : 0 auto;
        cursor:pointer;
        margin-bottom:40px;
    }
`;