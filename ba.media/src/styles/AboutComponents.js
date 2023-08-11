import styled from "styled-components"

export const AboutContainer = styled.div`
    height: 100vh;
    width: 100vw;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        width: 100vw; 
        //height: 100vh;
        //background-color:red;
    }
    @media (min-width:1600px){ 
        height: auto;
        width: 100vw;
    }
`;

export const TextContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        height:70vh;
        font-size: 59px;
    }
    @media (min-width:1600px){ 
        height: 70vh;
        width: 100%;
    }
`;

export const Text = styled.div`
    font-family: 'Inter Tight', sans-serif;
    font-size: 1.6rem;
    line-height: 1;
    width: 85%;
    text-align: center;
    color: #242323;
    span{
        margin: 0px;
        padding: 0px;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        width: 77%;
        font-size: 59px;
    }
    @media (min-width:1600px){ 
        width: 46%;
        font-size: 4rem;
        line-height: 1em;
    }
`;

export const VideoContainer = styled.div`
    width: 100vw;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (min-width:1600px){ 
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Video = styled.div`
    iframe{
        width: 100%;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        iframe{
            width: 1000px;
            height: 800px;
        }
    }
    @media (min-width:1600px){ 
        iframe{
            width: 1200px;
            height: 800px;
        }
    }
`