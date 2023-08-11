import styled , {keyframes} from 'styled-components';

const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(110px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const H3 = styled.div`
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    font-size:30px;
    text-align:center;
    font-weight: bold;
    margin-bottom:50px;
    span{
        color:#FF0099;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        font-size:63px;
        text-align:left;
        margin-left:120px;
        margin-bottom:90px;
        
    }
    @media (min-width:1600px){                     
        font-size:63px;
        text-align:left;
        margin-left:340px;
        margin-bottom:80px;
    }
`

export const DivContent = styled.div`
    width:auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-bottom:70px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        display:flex;
        justify-content:center;
        flex-direction:row;
    }
    @media (min-width:1600px){                       
        display:flex;
        justify-content:center;
        flex-direction:row;
        margin-left:100px;
        height:43vh;
        margin-bottom:60px;
    }
`

export const Div = styled.div`
    text-align:center;
    margin-bottom:45px;
    img{
        border-radius:100%;
        border: solid 6px white;
        height:185px;
        box-shadow: inset 0 0 10px #BCBCBC, 0 0 10px #BCBCBC;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        img{
            margin-right:20px;
            margin-left:30px;
            width:225px;
            height:225px;
        }
        p,h4{
            margin-right:20px;
        }
    }
    @media (min-width:1600px){  
        margin-right:85px;
        margin-bottom:30px;
        margin-right:0px;
        img{
            width:225px;
            height:225px;
            margin-right:80px;
            margin-left:0px;
            box-shadow: inset 0 0 10px #BCBCBC, 0 0 10px #BCBCBC;
        }
        h4{
            margin-top:20px;
        }
        p,h4{
            margin-right:80px;
        }
    }
`
export const H4 = styled.h4`
    margin-top:20px;
    font-family: 'Poppins', sans-serif;
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-in-out 0.5s forwards;
    @media (min-width:1600px){
        animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    }
`
export const P = styled.p`
    color:#1D67CD;
    font-weight:600;
    font-family: 'Poppins', sans-serif;
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-in-out 0.5s forwards;
    @media (min-width:1600px){
        animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    }
`