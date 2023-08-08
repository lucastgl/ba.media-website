import styled from "styled-components";

export const H1 = styled.h1`
    margin-top:100px;
    color:#21A6F3;
    padding:10px;
    @media (min-width:1600px){
        font-size:64px;
        margin-left:333px;
        padding:0px;
    }
`
export const P = styled.p`
    color:#21A6F3;
    padding:10px;
    margin-bottom:20px;
    font-weight: bold;
    span{
        color:#FF0099;
    }
    @media (min-width:1600px){
        margin-bottom:40px;
        margin-left:336px;
        font-size:20px;
        padding:0px;
    }
`

export const GalleryBox =  styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9);
    margin : 0 auto;
    margin-left:20px;
    
    @media (min-width:1600px){
        width: 1200px;
        grid-template-columns: repeat(3, 1fr);
        align-items:center;
        margin : 0 auto;
    }
`;