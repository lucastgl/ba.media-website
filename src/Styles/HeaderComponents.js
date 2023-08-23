import styled,  { keyframes }  from "styled-components"

export const HeaderBox = styled.div` 
    background-color: #EDEDED;   
    @media screen and (min-width: 725px) and (max-width: 1400px){
        width:1450px;
    }
    @media screen and (min-width: 1401px) and (max-width: 1599px){
        //width:1450px;
        width:100%;
    }
    @media (min-width:1600px){
        //width: 1400px;
    }
`;

export const DesktopView = styled.div`
    display:none;
    @media screen and  (min-width: 725px) and (max-width: 1000px){
        height: 90vh; 
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #EDEDED;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        height: 90vh; 
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #EDEDED;
    }
    @media (min-width:1600px){
        height: 50vh; 
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #EDEDED;
    }
`;

export const MobileView = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;
    @media (min-width:725px){ 
        display: none;
    }
`;

const slideInUp = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Title = styled.div`
    display: flex;
    img{
        height: 60px;
        position: relative;  // Agregar esta línea
    }
    opacity: 0;
    animation: ${slideInUp} 1s ease-in-out 1s forwards;

    @media screen and  (min-width: 725px) and (max-width: 1599px){
        display: flex;
        align-items: center;
        height: 50%;
        img{
            height: 180px;
        }
        img:first-child {
            right: -40px; 
            padding-top: 25px;
        }
        img:last-child {
            left: -30px; 
            padding-top: 25px;
        }
    }
    @media (min-width:1600px){ 
        display: flex;
        align-items: center;
        width: 50%;
        height: 50%;
        img{
            height: 150px;
        }
        img:first-child {
            right: -40px; 
            padding-top: 25px;
        }
        img:last-child {
            left: -25px; 
            padding-top: 25px;
        }
    }
`;

export const TVgif = styled.img`
    width: 60vw;
    height: auto; // Cambiar a auto
    opacity: 0;
    animation: ${slideInUp} 1s ease-in-out 1.5s forwards;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        z-index: -1;
        width: auto;
        height: 300px!important;
    }
    @media (min-width:1600px){ 
        z-index: -1;
        width: auto;
        height: 250px!important;
    }
`

