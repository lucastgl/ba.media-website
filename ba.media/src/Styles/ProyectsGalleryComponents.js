import styled from "styled-components"

export const Header =  styled.div`
    p{
        color:#21A6F3;
        font-size:12px;
        padding-bottom: 20px;
        padding-left: 10px;
        font-weight: bold;
        margin-left:65px;
        letter-spacing: 0.03em;
        font-weight: 900;
        position:relative;
        top:10px;
        @media (min-width:1600px){                       
            font-size:16px;
            margin-left:333px;
            position:relative;
            top:40px;
        }
    }
    h2{
        font-size:30px;
        text-align:center;
        font-weight: bold;
        margin-bottom:50px;
        span{
            color:#FF0099;
        }
        @media (min-width:1600px){                     
            font-size:63px;
            text-align:left;
            margin-left:340px;
            margin-bottom:80px;
        }
    }
`;

export const GalleryContainer =  styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
`;

export const GalleryBox =  styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;