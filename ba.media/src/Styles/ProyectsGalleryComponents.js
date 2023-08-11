import styled from "styled-components"

export const Header = styled.div`
    p {
        color: #21A6F3;
        font-size: 12px;
        padding-bottom: 20px;
        padding-left: 10px;
        font-weight: 900;
        margin-left: 130px;
        letter-spacing: 0.03em;
        // position: relative;
        top: 10px;
        @media screen and  (min-width: 725px) and (max-width: 1599px){                        
            font-size:16px;
            margin-left:100px;
            position:relative;
            top:90px;
        }
        @media (min-width: 1600px) {                       
            font-size: 16px;
            margin-left: 333px;
            position:relative;
            padding-bottom: 0px;
            top:10px;
        }
    }

    h2 {
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 50px;

        span {
            color: #FF0099;
        }
        @media screen and  (min-width: 725px) and (max-width: 1599px){
            margin-top:60px;
            font-size:5.5rem;
            text-align:left;
            margin-left:100px;
        }
        @media (min-width: 1600px) {  
            margin-top:0px;                   
            font-size: 63px;
            text-align: left;
            margin-left: 340px;
            margin-bottom: 80px;
        }
    }
`;

export const GalleryContainer = styled.div`
    margin-left: 0px;
    width: 100%;  // Para móviles, usaremos el ancho completo
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:50px;
    @media screen and  (min-width: 725px) and (max-width: 1599px) {                     
        width: 100%;
        //margin-left: 110px;
    }
    @media (min-width: 1600px) {                     
        margin-left: 320px;
        width: 65%;
        //margin-left: 110px;
    }
`;

export const GalleryBox =  styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin : 0 auto;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin : 0 auto;
        width: 86%;
    }
    @media (min-width: 1600px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin : 0 auto;

    }
`;