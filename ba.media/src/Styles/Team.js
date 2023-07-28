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
    animation: ${InUp} 1s ease-out;
    font-size:30px;
    text-align:center;
    font-weight: bold;
    margin-bottom:40px;
        span{
            color:#FF0099;
        }
        @media (min-width:1600px){                     
            font-size:63px;
            text-align:left;
            margin-left:340px;
        }
`

export const DivContent = styled.div`
    width:auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    @media (min-width:1600px){                       
        display:flex;
        justify-content:center;
        flex-direction:row;
    }
`

export const Div = styled.div`
    text-align:center;
    margin-bottom:30px;
    img{
        border-radius:100%;
        border: solid 5px white;
        width:190px;
        height:190px;
    }
    h4{
        animation: ${InUp} 1s ease-out;
    }
    p{
        color:#1D67CD;
        font-weight:bold;
        animation: ${InUp} 1s ease-out;
    }
    @media (min-width:1600px){  
        margin-right:80px;
        img{
            width:240px;
            height:240px;
        }
    }
`