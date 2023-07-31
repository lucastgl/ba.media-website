import styled,{ keyframes } from 'styled-components';

const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const DivContent = styled.div`
    margin-bottom:110px;
`
export const GIF = styled.img`
    display:none;
    @media (min-width:1600px){ 
        display:inline;                       
        width:140px;
    }
`
export const H3 = styled.div`
    animation: ${InUp} 1s ease-out;
    font-size:30px;
    padding-bottom:30px;
    margin-bottom:40px;
    text-align:center;
    font-weight: bold;
    display:flex;
    align-items:center;
        span{
            margin-left:20px;
            color:#FF0099;
        }
        @media (min-width:1600px){                       
            font-size:63px;
            text-align:left;
            margin-left:340px;
        }
`

export const H5 = styled.h5`
animation: ${InUp} 1s ease-out;
    color:#21A6F3;
    text-align:center;
    font-weight: bold;
    @media (min-width:1600px){                       
        font-size:15px;
        text-align:left;
        margin-left:320px;
    }
`
export const Div = styled.div`
    display:flex;
    img{
        width:60px;
        filter: grayscale(100%);
        transition: filter 0.5s ease;
    }
    @media (min-width:1600px){                       
        font-size:60px;
        padding:10px;
        justify-content:center;
        img{
            width:100px;
            margin-left:50px;
        }
        img:hover {
            filter: grayscale(0%);
        }
    }
`