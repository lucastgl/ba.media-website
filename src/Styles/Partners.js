import styled,{ keyframes } from 'styled-components';


export const DivContainer = styled.div`
    overflow: hidden;
    @media screen and  (min-width: 725px) and (max-width: 1000px){
        width:max-content;
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
        transform: translateX(-37%);
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
    transform: translateX(${({ currentX }) => `${currentX}px`});
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
        animation: scroll 8s linear infinite;
        grid-template-columns: repeat(5, 1fr);
        img {
            width: 70px;
        }
    }
    @media screen and (min-width: 1001px) and (max-width: 1024px) {
        grid-template-columns: repeat(8, 1fr);
        img {
            width: 90px;
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px) {
        grid-template-columns: repeat(8, 1fr);
        img {
            width: 90px;
        }
    }
    @media screen and (min-width: 1301px) and (max-width: 1600px) {
        grid-template-columns: repeat(8, 1fr);
        img {
            width: 100px;
        }
    }
    @media screen and (min-width: 1601px) and (max-width: 1920px) {
        grid-template-columns: repeat(8, 1fr);
        img {
            width: 120px;
        }
    }
    @media screen and (min-width: 1921px) and (max-width: 2560px) {
        grid-template-columns: repeat(8, 1fr);
        img {
            width: 150px;
        }
    }
    @media screen and (min-width: 2561px) and (max-width: 3440px) {
        grid-template-columns: repeat(8, 1fr);
        img {
            width: 200px;
        }
    }
`;