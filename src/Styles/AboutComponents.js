import styled from "styled-components"

export const AboutContainer = styled.div`
    height: 100vh;
    width: 100vw;
    @media screen and  (min-width: 725px) and (max-width: 1400px){
        height: auto;
        width:1400px;
    }
    @media screen and  (min-width: 1401px) and (max-width: 1599px){
        height: auto;
    }
    @media (min-width:1600px){ 
        width: 100%;
        height: 100%;
    }
`;

export const TextContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and  (min-width: 725px) and (max-width: 1000px){
        height:100vh;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        height:100vh;
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
    @media screen and  (min-width: 725px) and (max-width: 1000px){
        width: 90%;
        font-size: 4.5rem;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        width: 95%;
        font-size: 4.5rem;
    }
    @media (min-width:1600px){ 
        width: 46%;
        font-size: 4rem;
        line-height: 1em;
    }
`;

export const VideoContainer = styled.div`
    width: 100vw;
    @media screen and  (min-width: 725px) and (max-width: 1000px){ 
        width:max-content;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){ 
        width:100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (min-width:1600px){ 
        width: 100vw;
        height: auto;
        display: flex;
    }
`;

export const Video = styled.div`
    iframe{
        width: 100%;
    }
    @media screen and  (min-width: 725px) and (max-width: 1450px){ 
        iframe{
            width: 1400px;
            height: 800px;
        }
    }
    @media screen and  (min-width: 1451px) and (max-width: 1500px){ 
        iframe{
            width: 1450px;
            height: 800px;
        }
    }
    @media screen and  (min-width: 1501px) and (max-width: 1599px){
        iframe{
            width: 1500px;
            height: 800px;
        }
    }
    @media (min-width:1600px){ 
        margin-bottom:100px;
        iframe{
            width: 100vw;
            height: 60vw;
        }
    }
`