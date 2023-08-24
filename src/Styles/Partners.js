import styled,{ keyframes } from 'styled-components';


export const DivContainer = styled.div`
    overflow: hidden;
    @media screen and  (min-width: 725px) and (max-width: 1000px){
        width:max-content;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        margin-left: 35px;
    }
`
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
        transform: translateX(-34%);
    }
`;

export const H3 = styled.span`
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    display:block;
    font-size:2rem;
    margin-bottom:44px;
    text-align:center;
    font-weight: bold;
    padding-top:10px;
    span{
        color:#FF0099;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        font-size: 5rem;
        text-align:left;
        margin-left:80px;
        display:flex;
        align-items:center;
        padding-top:0px;
        padding-bottom:0px;
        margin-bottom:20px;
        span{
            margin-left:20px;
        }
    }
    @media (min-width:1600px){ 
        font-weight: 700; 
        display:flex;
        align-items:center;                     
        font-size:4rem;
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
export const H5 = styled.p`
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    color:#21A6F3;
    text-align:center;
    font-size:0.9rem;
    padding:10px;
    font-weight: bold;
    font-weight: 900;
    position:relative;
    top:10px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        font-size: 1rem;
        text-align:left;
        margin-left:75px;
        position:relative;
        top:40px;
    }
    @media (min-width:1600px){                       
        font-size:0.9rem;
        margin-left:333px;
        position:relative;
        top:40px;
        text-align:left;
    }
`
export const GIF = styled.img`
    display:none;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        display:inline;                       
        width:158px;
        width:158px;
    }
    @media (min-width:1600px){ 
        display:inline;                       
        width:158px;
        width:158px;
    }
`
export const DivContent = styled.div`
    margin-bottom:130px;
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        width:1400px;
    }
    @media (min-width:1600px){ 
        animation:none;
        margin-bottom:200px;
        margin-top:100px;
    }
`
export const ColumnWrapper = styled.div`
    display: grid;
    animation: ${({ isScroll }) => (isScroll ? 'none': ScrollToEnd)} 5s linear;
    animation-fill-mode: forwards;
    grid-template-columns: repeat(8, 1fr);
    margin: 0 auto;
    width:max-content;
    img {
        width: 60px;
        filter: grayscale(100%);
        transition: filter 0.5s ease;
        margin-left: 15px;
    }
    @media screen and  (min-width: 600px){
        animation:none;
    }
    @media screen and  (min-width: 725px) and (max-width: 1000px){ 
        justify-content: center;
        animation: none;
        width:1350px;
        img{
            width:110px;
            margin-right: 15px;
        }
        img:hover {
            filter: grayscale(0%);
        }
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        justify-content: center;
        animation: none;
        img{
            width:110px;
            margin-right: 35px;
            margin-bottom: 20px;
            scale: 1.2;
        }
        img:hover {
            filter: grayscale(0%);
        }
    }
    @media (min-width: 1600px) {
        justify-content: center;
        animation: none;
        gap:40px;
        img {
            width: 108px;
            height: 100px;
            margin-left: 12px;
        }
        img:hover {
            filter: grayscale(0%);
        }
    }

`;