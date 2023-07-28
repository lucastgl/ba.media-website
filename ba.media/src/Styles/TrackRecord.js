import styled,{ keyframes }  from 'styled-components';

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
    margin-bottom:160px;
    @media (min-width:1600px){
        margin-bottom:40px;
    }
`
export const SVG = styled.svg`
    width:90px;
    height:90px;
`
export const GIF3 = styled.img`
    display:none;
    @media (min-width:1600px){
        display:inline;                       
        width:139px;
    }
`
export const H2 = styled.h2`
    animation: ${InUp} 1s ease-out;
    font-size:30px;
    text-align:center;
    font-weight: bold;
    display:flex;
    align-items:center;
    span{
        color:#FF0099;
        margin-left:20px;
    }
    @media (min-width:1600px){  
        letter-spacing: 3px;                    
        font-size:67px;
        text-align:left;
        margin-left:320px;
    }
`
export const H5 = styled.h5`
    animation: ${InUp} 1s ease-out;
    color:#21A6F3;
    font-weight: bold;
    text-align:center;
    @media (min-width:1600px){                       
        font-size:15px;
        text-align:left;
        margin-left:320px;
    }
`

export const Content = styled.div`
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-weight: bold;
    @media (min-width:1600px){                     
        display:flex;
        justify-content:center;
        flex-direction:row;
    }
}
`

export const StyledDiv = styled.div`
    background-color:black;
    height:270px;
    text-align:center;
    color:white;
    padding:10px;
    padding-top:40px;
    border-radius:14px;
    margin-bottom:30px;
    width:300px;
    p{
        font-size:40px;
        animation: ${InUp} 1s ease-out;
    }
    span{
        font-size:19px;
        animation: ${InUp} 1s ease-out;
    }
    @media (min-width:1600px){                        
        width:265px;
        height:300px;
        margin-right:30px;
        p{
            padding:0px;
        }
        span{
            padding:10px;
            font-size:18px;
        }
    }
`
export const StyledDiv2 = styled.div`
    background-color:#21A6F3;
    height:270px;
    border-radius:14px;
    text-align:center;
    color:white;
    padding:10px;
    padding-top:40px;
    width:300px;
    margin-bottom:30px;
    
    p{
        font-size:40px;
        animation: ${InUp} 1s ease-out;
    }
    span{
        font-size:19px;
        animation: ${InUp} 1s ease-out;
    }
    @media (min-width:1600px){                    
        width:265px;
        height:300px;
        margin-right:30px;
        span{
            padding:10px;
        }
        p{
            padding:0px;
        }
    }
`;