import styled , {keyframes}from "styled-components"

export const Header = styled.div`
    p {
        color: #21A6F3;
        font-size: 0.9rem;
        padding-bottom: 20px;
        font-weight: 900;
        letter-spacing: 0.03em;
        top: 10px;
        margin-right:10px;
        text-align:center;
        position:relative;
        top:10px;

        @media screen and  (min-width: 725px) and (max-width: 1599px){                        
            font-size:16px;
            margin-left:80px;
            position:relative;
            top:90px;
            text-align:left;
        }
        @media (min-width: 1600px) {                       
            font-size:0.9rem;
            margin-left: 340px;
            position:relative;
            padding-bottom: 0px;
            top:10px;
            text-align:left;
        }
    }

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        margin-bottom: 50px;

        span {
            color: #FF0099;
        }
        @media screen and  (min-width: 725px) and (max-width: 1599px){
            margin-top:60px;
            font-size:5rem;
            text-align:left;
            margin-left:80px;
            width:1000px;
        }
        @media (min-width: 1600px) {  
            margin-top:0px;                   
            font-size: 4rem;
            //font-size:63px;
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
    @media screen and  (min-width: 725px) and (max-width: 1400px) {                     
        //width: 100%;
        //width:auto;
        width: 1400px;
    }
    @media screen and  (min-width: 1401px) and (max-width: 1599px) {                     
    }
    @media (min-width: 1600px) {                     
        display: flex;
        justify-content: center;
        align-items: center;
        //background-color:blue;
    }
`;

export const GalleryBox =  styled.div`
    //display: grid;
    //grid-template-columns: repeat(2, 1fr);
    //margin : 0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin : 0 auto;
        cursor: pointer;
        grid-gap:50px;
    }
    @media (min-width: 1600px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin : 0 auto;
        cursor: pointer;
    }
`;
export const DivButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    @media screen and  (min-width: 725px) and (max-width: 1410px){
        width:1400px;
    }
    @media screen and  (min-width: 1411px) and (max-width: 1599px){
        width:auto;
    }
`
const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;
export const ButtonMore = styled.button`
    border-radius:40px;
    border: 1px #21A6F3 solid ;
    font-weight:900;
    font-size:0.9rem;
    color:#21A6F3;
    background-color:white;
    width:30%;
    padding:12px;
    margin-top:50px;
    margin-bottom:90px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        width:30%;
        border-radius:10px;
        margin-bottom:60px;
        &:hover{
            background-color:#21A6F3;
            color:white;
        }
    }
    @media (min-width:1600px){
        font-weight:900;
        border-radius:10px;
        border: 1px #21A6F3 solid ;
        width:240px;
        padding:8px;
        margin-top:100px;
        cursor: pointer;
        margin-right:40px;
        margin-bottom:60px;
        animation:  ${InUp} 5s ease-in-out ;
        &:hover{
            background-color:#21A6F3;
            color:white;
        }
    }
`
export const DivLinea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:1400px;
    @media screen and  (min-width: 725px) and (max-width: 1400px){
        width:1400px;
    }
    @media screen and  (min-width: 1401px) and (max-width: 1599px){
        width:100%;
    }
    @media (min-width:1600px){
        width:auto;
    }
`
export const Linea = styled.div`
    border: 1px solid #ECECEC;
    display:none;
    @media screen and  (min-width: 725px) and (max-width: 1400px){
        width:70%;
        display:inline;
        border: 1px solid #ECECEC;
    }
    @media screen and  (min-width: 1401px) and (max-width: 1599px){
        width:70%;
        display:flex;
        display:inline;
        border: 1px solid #ECECEC;
    }
    @media (min-width:1600px){
        width:50%;
        display:inline;
        border: 1px solid #ECECEC;
    }
    
`