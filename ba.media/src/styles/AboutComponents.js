import styled from "styled-components"

export const AboutContainer = styled.div`
    height: 100vh;
    width: 100vw;
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
    span{
        margin: 0px;
        padding: 0px;
    }
    @media (min-width:1600px){ 
        width: 45%;
        font-size: 4rem;
        line-height: 1em;
    }
`;

export const VideoContainer = styled.div`
    width: 100vw;

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

    @media (min-width:1600px){ 
        iframe{
            width: 1200px;
            height: 800px;
        }
    }
`