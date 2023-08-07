import styled,  { keyframes }  from "styled-components"

export const HeaderBox = styled.div`    
`;

export const DesktopView = styled.div`
    display:none;
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
    @media (min-width:1600px){ 
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
        height: 70px;
        position: relative;  // Agregar esta línea
    }
    opacity: 0;
    animation: ${slideInUp} 1s ease-in-out 1s forwards;
    @media (min-width:1600px){ 
        display: flex;
        align-items: center;
        width: 50%;
        height: 50%;
        img{
            height: 150px;
        }
        img:first-child {
            right: -60px; // Ajustar según tus necesidades
            padding-top: 25px;
        }
        img:last-child {
            left: -50px; // Ajustar según tus necesidades
            padding-top: 25px;
        }
    }
`;

export const TVgif = styled.img`
    width: 60vw;
    height: auto; // Cambiar a auto
    opacity: 0;
    animation: ${slideInUp} 1s ease-in-out 1.5s forwards;
    @media (min-width:1600px){ 
        z-index: -1;
        width: auto;
        height: 250px!important;
    }
`

