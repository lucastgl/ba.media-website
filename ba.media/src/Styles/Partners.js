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
const ScrollToEnd = keyframes`
    0% {
    transform: translateX(0);
    }
    100% {
        transform: translateX(-32%);
    }
`;

export const H3 = styled.span`
    animation: ${InUp} 1s ease-out;
    display:block;
    font-size:30px;
    padding-bottom:30px;
    margin-bottom:40px;
    text-align:center;
    font-weight: bold;
    padding-top:10px;
        span{
            color:#FF0099;
        }
        @media (min-width:1600px){  
            display:flex;
            align-items:center;                     
            font-size:63px;
            text-align:left;
            margin-left:340px;
            padding-top:0px;
            padding-bottom:0px;
            margin-bottom:20px;
            span{
                margin-left:20px;
            }
        }
`
export const H5 = styled.span`
    animation: ${InUp} 1s ease-out;
    color:#21A6F3;
    text-align:center;
    font-size:12px;
    padding:10px;
    font-weight: bold;
    margin-left:60px;
    font-weight: 900;
    @media (min-width:1600px){                       
        font-size:16px;
        margin-left:340px;
        position:relative;
        top:30px;
    }
`
export const GIF = styled.img`
    display:none;
    @media (min-width:1600px){ 
        display:inline;                       
        width:150px;
    }
`
export const DivContent = styled.div`
    margin-top:100px;
    margin-bottom:130px;
    @media (min-width:1600px){ 
        animation:none;
        margin-bottom:200px;
        margin-top:100px;
    }
`
export const ColumnWrapper = styled.div`
    display: grid;
    animation: ${ScrollToEnd} 5s linear;
    grid-template-columns: repeat(8, 1fr);
    margin: 0 auto;
    width:600px;
    img {
        width: 60px;
        filter: grayscale(100%);
        transition: filter 0.5s ease;
        margin-left: 15px;
    }

    @media (min-width: 1200px) {
        justify-content: center;
        animation: none;
        gap:40px;
        img {
            width: 105px;
            height: 100px;
            //padding: 15px;
            margin-left: 15px;
        }
        img:hover {
            filter: grayscale(0%);
        }
    }

`;