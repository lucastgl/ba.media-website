import styled, {keyframes} from 'styled-components';

const InUp = keyframes`
    0% {
        opacity: 1;
        transform: translateX(-140px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;
const InUpMobile = keyframes`
    0% {
        opacity: 0;
        transform: translateY(90px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;
export const Logo = styled.img`
    width:200px;
    margin-top:20px;
    animation:  ${({ showAnimate }) => (showAnimate ? InUpMobile : 'none')} 1s ease-in-out ;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        width:330px;
        margin-top:0px;
    }
    @media (min-width:1600px){ 
        width:330px;
        animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-in-out ;
        height:53px; 
        margin-top:0px;
    }
`
export const LogoApps = styled.img`
    margin-top:30px;
    width:45px;
    height:45px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        width:40px;
        height:40px;
        margin-top:40px;
    }
    @media (min-width:1600px){
        width:40px;
        height:40px;
        margin-top:40px;
    }
`
export const DivLogos = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        margin-right:50px;
        margin-top:100px;
    }
    @media (min-width:1600px){
        margin-right:50px;
        margin-top:100px;
    }
`
export const DivContent = styled.div`
    background: #091405;
    color:white;
    text-align:center;
    padding:10px;
    height:410px;
    @media screen and  (min-width: 725px) and (max-width: 1400px){ 
        display:flex;
        justify-content:center;
        height:390px;
        width:1400px;
    }
    @media screen and  (min-width: 1401px) and (max-width: 1599px){ 
        display:flex;
        justify-content:center;
    }
    @media (min-width:1600px){
        display:flex;
        justify-content:center;
        height:390px;
        width:auto;
    }
`
export const Content = styled.div`
    margin-top:40px;
    display:flex;
    justify-content:center;
    margin-left:40px;
    margin-bottom:40px;
    @media screen and  (min-width: 725px) and (max-width: 1000px){ 
        width:450px;
        justify-content:space-around;
        margin-top:90px;
        margin-left:100px;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        margin-top:90px;
    }
    @media (min-width:1600px){
        width:450px;
        justify-content:space-around;
        margin-top:90px;
        margin-left:100px;
    }

`

export const Div = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    align-items:start;
    width:135px;
    margin-left:10px;
    margin-right:10px;
    h4{
        margin-bottom:16px;
        font-size:16px;
    }
    a{
        color:white;
        font-size:17px;
    }
    p{
        font-size:15px;
        margin-bottom:5px;
        text-align:left;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        width:220px;
        align-items:start;
        margin-left:0px;
        margin-right:0px;
        h4{
            font-size:23px;
            margin-top:30px;
            margin-bottom:30px;
        }
        p{
            font-size:15px;
            margin-bottom:0px;
            
        }
    }
    @media (min-width:1600px){
        width:220px;
        align-items:start;
        margin-left:0px;
        margin-right:0px;
        h4{
            font-size:23px;
            margin-top:30px;
            margin-bottom:30px;
        }
        p{
            font-size:15px;
            margin-bottom:0px;
            
        }
    }
    }

`