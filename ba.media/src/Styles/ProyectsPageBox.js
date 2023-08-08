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
        width: 350px;
        height: 450px;
    }
`;