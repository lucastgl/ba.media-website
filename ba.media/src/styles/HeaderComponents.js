import styled,  { keyframes }  from "styled-components"

export const HeaderBox = styled.div`
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;

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
    }
    opacity: 0;
    animation: ${slideInUp} 1s ease-in-out 1s forwards;
`;

export const TVgif = styled.img`
    width: 60vw;
    opacity: 0;
    animation: ${slideInUp} 1s ease-in-out 1.5s forwards;
`

