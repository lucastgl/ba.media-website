import styled from "styled-components"

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.3s ease-in-out;
`;

export const Container = styled.div`
    width:165px;
    margin-bottom:30px;
    h3{
        margin-top:40px;
        font-size:16px;
        margin-left:8px;
    }
    @media screen and  (min-width: 725px) and (max-width: 1370px){
        margin-bottom:70px;
        width:345px;
        margin-right:35px;
        h3{
            margin-top:20px;
            font-size:25px;
            margin-left:0px;
            font-family: 'Inter Tight', sans-serif;
        }
        &:hover ${Image} { 
            transform: scale(1.1);
        }
        
    }
    @media screen and  (min-width: 1371px) and (max-width: 1599px){
        margin-bottom:70px;
        width:345px;
        margin-right:35px;
        &:hover ${Image} {
            transform: scale(1.1);
        }
        
    }
    @media (min-width:1600px){
        margin-bottom:70px;
        width:365px;
        h3{
            margin-top:20px;
            font-size:25px;
            margin-left:0px;
            font-family: 'Inter Tight', sans-serif;
        }
        &:hover ${Image} {
            transform: scale(1.1); 
        }
    }
`


export const ImageContainer = styled.div`
    width:160px;
    height:215px;
    margin-left:5px;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        width: 360px;
        height: 65vh;
        overflow: hidden;
        margin-left:0px;
        overflow: hidden; 
    }
    @media (min-width:1600px){
        width: 372px;
        height: 496px;
        overflow: hidden;
        margin-left:0px;
        overflow: hidden; 
    }
`;

export const DetailSection = styled.div`
    display: flex;
    flex-direction:column;
    padding:10px;
    margin-top:100px;
    p{
        color:black;
    }
    @media (min-width:1600px){
        width:500px;
        h2{
            font-size:27px;
            margin-bottom:15px;
        }
        p{
            color:#21A6F3;
        }
        img{
            max-width: 30vw:
            height: auto;
        }
    }
`;
export const InfoText = styled.p`
    font-size:12px;
    font-family: 'Inter Tight', sans-serif;
    margin-left:8px;
    color:#5C5C5C;
    @media screen and  (min-width: 725px) and (max-width: 1599px){
        font-size:14px;
        color:#21A6F3;
        font-weight: 700;
        font-size:14px;
        margin-left:0px;
    }
    @media (min-width:1600px){
        color:#21A6F3;
        font-weight: 700;
        font-size:14px;
        margin-left:0px;
    }
`;