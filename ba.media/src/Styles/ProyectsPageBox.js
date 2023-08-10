import styled from "styled-components"

export const Container = styled.div`
    width:165px;
    margin-bottom:30px;
    p{
        font-size:14px;
    }
    h3{
        font-size:16px;
    }
    @media (min-width:1600px){
        margin-bottom:70px;
        width:365px;
        h3{
            font-size:25px;
        }
        p{
            color:#21A6F3;
            font-weight: 700;
        }
        
    }
`

export const Image = styled.img`
    width: 164px;
    height: 219px;
    @media (min-width:1600px){
        width:350px;
        height:460px;
        transition: transform 0.3s ease-in-out;
        &:hover {
            transform: scale(1.015);
        }
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
