import styled,{ keyframes }  from 'styled-components';

const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const DivTitles = styled.div`
    display:flex;
    flex-direction:column;
    @media (min-width:1600px){
        flex-direction:column;
    }
`
export const DivContent = styled.div`
    margin-bottom:160px;
    @media screen and  (min-width: 725px) and (max-width: 1400px){ 
        margin-bottom:0px;
        width: max-content;
    }
    @media screen and  (min-width: 1401px) and (max-width: 1599px){ 
        margin-bottom:0px;
    }
    @media (min-width:1600px){
        margin-bottom:0px;
    }
`
export const SVG = styled.svg`
    width:105px;
    height:105px;
    margin-top:20px;
    margin-bottom:30px;
    @media (min-width:1600px){
        width:90px;
        height:90px;
        margin-top:10px;
        margin-bottom:0px;
        animation: ${InUp} 1s ease-out;
    }
`
export const SVGVIDEO = styled.svg`
    width:130px;
    height:130px;
    @media (min-width:1600px){
        width:110px;
        height:110px;
        margin-top:10px;
        animation: ${InUp} 1s ease-out;
    }
`
export const GIF3 = styled.img`
    display:none;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        display:inline;                       
        width:139px;
        margin-left:25px;
    }
    @media (min-width:1600px){
        display:inline;                       
        width:139px;
        margin-left:25px;
        
    }
`
export const H2 = styled.h2`
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    font-size:2rem;
    text-align:center;
    font-weight: bold;
    margin-bottom:30px;
    span{
        color:#FF0099;
    }
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        padding-top:10px;
        font-size:5rem;
        text-align:left;
        margin-left:80px;
        letter-spacing: 2.5px;
        display:flex;
        align-items:center; 
        margin-bottom:30px;
    }
    @media (min-width:1600px){ 
        display:flex;
        align-items:center; 
        letter-spacing: 2.5px;                    
        font-size:4rem;
        text-align:left;
        margin-left:340px;
        margin-bottom:30px;
        span{
            margin-left:20px;
        }
    }
`
export const H5 = styled.h5`
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
    color:#21A6F3;
    font-weight: bold;
    text-align:center;
    position:relative;
    font-weight: 900;
    top:40px;
    font-size:0.9rem;
    margin-bottom:50px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){ 
        font-size:1rem;
        text-align:left;
        margin-left:85px;
        position:relative;
        bottom:150px;
        margin-bottom:8px;
    }
    @media (min-width:1600px){                       
        font-size:0.9rem;
        text-align:left;
        margin-left:345px;
        position:relative;
        font-weight: 900;
        margin-bottom:0px;
        top:30px;
        bottom:0px;
    }
`

export const Content = styled.div`
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-weight: bold;
    @media screen and  (min-width: 725px) and (max-width: 1000px){ 
        display:flex;
        justify-content:center;
        flex-direction:row;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){
        justify-content:center;
        flex-direction:row;
    }
    @media (min-width:1600px){                     
        display:flex;
        justify-content:center;
        flex-direction:row;
        margin-bottom:0px;
    }
}
`
export const DivChild = styled.div`
    animation:  ${({ showAnimate }) => (showAnimate ? InUp : 'none')} 1s ease-out;
`

export const StyledDiv = styled.div`
    background-color:#282626;
    height:280px;
    text-align:center;
    color:white;
    padding:10px;
    padding-top:40px;
    border-radius:14px;
    margin-bottom:30px;
    width:300px;
    p{
        font-size:40px;
    }
    span{
        font-size:19px;
    }
    @media screen and  (min-width: 725px) and (max-width: 1000px){ 
        margin-right:35px;
        height:300px;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){ 
        margin-right:35px;
        height:300px;
        width:275px;
    }
    @media (min-width:1600px){                       
        width:255px;
        height:280px;
        margin-right:30px;
        p{
            padding:0px;
            font-weight: 900;
            margin-top:20px;
        }
        span{
            padding:10px;
            font-size:18px;
        }
    }
`
export const StyledDiv2 = styled.div`
    background-color:#21A6F3;
    height:280px;
    width:300px;
    border-radius:14px;
    text-align:center;
    color:white;
    padding:10px;
    padding-top:40px;
    margin-bottom:30px;
    p{
        font-size:40px;
    }
    span{
        font-size:19px;
    }
    @media screen and  (min-width: 725px) and (max-width: 1000px){ 
        margin-right:35px;
        height:300px;
    }
    @media screen and  (min-width: 1001px) and (max-width: 1599px){ 
        margin-right:35px;
        height:300px;
        width:275px;
    }
    @media (min-width:1600px){                    
        width:255px;
        height:280px;
        margin-right:30px;
        p{
            padding:0px;
            font-weight: 900;
            margin-top:20px;
        }
    }
`;