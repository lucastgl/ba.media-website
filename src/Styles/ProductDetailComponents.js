import styled from "styled-components"
import {FaAngleRight, FaAngleLeft, FaTimes, FaArrowLeft} from "react-icons/fa"

export const  ModalContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding-top:20px;
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 120;
    @media screen and (min-width:725px) and (max-width: 1000px){
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        height:100%;
        position: fixed;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        z-index: 120;
        background-color: rgba(246,249,245,1) ;
    }
    @media screen and (min-width:1001px) and (max-width: 1599px){
        width:100%;
        height:100%;
        display: flex;
        flex-direction:row;
        justify-content:space-between;
    }
    @media (min-width:1600px){
        display: flex;
        flex-direction:row;
    }
`;

export const GalleryContent = styled.div`
    display:flex;
    flex-direction:column;
    @media screen and (min-width:725px) and (max-width: 1000px){
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;
        width: inherit;
    }
    @media screen and (min-width:1001px) and (max-width: 1599px){
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;
        width: inherit;
    }
    @media (min-width:1600px){
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;
        width:100%;
    }
`;

export const GallerySection = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    height:300px;
    img{
        max-width: 30vw;
        height: auto;
    }
    @media screen and (min-width:725px) and (max-width: 1000px){
        align-items: center;
        justify-content:space-between;
        width:1000px;
        height:auto;
        img{
            max-width: 850px;
        }
        iframe{
            height: 500px;
        }
    }
    @media screen and (min-width:1001px) and (max-width: 1599px){
        align-items: center;
        justify-content:space-between;
        width:1000px;
        height:auto;
        img{
            max-width: 850px;
        }
        iframe{
            height: 500px;
        }
    }
    @media (min-width:1600px){
        align-items: center;
        justify-content:space-between;
        width:1300px;
        height:auto;
        img{
            max-width: 1640px;
            height: 660px;
        }
    }
`;

export const DetailSection = styled.div`
    display: flex;
    flex-direction:column;
    padding:10px;
    margin-top:100px;
    @media (min-width:725px){
        width:500px;
        h2{
            font-size:50px;
        }
        img{
            max-width: 30vw:
            height: auto;
        }
    }
`;

export const FaTimesIcono = styled(FaTimes)`
    display:none;
    @media (min-width:725px){
        margin-right:50px;
        margin-top:10px;
        font-size:30px;
        display:block;
        cursor: pointer;
    }
`
export const FaArrowLeftIcono = styled(FaArrowLeft)`
    margin-left:10px;
    font-size:20px;
    z-index: 130;
    @media (min-width:725px){
        display:none;
    }
`
export const FaAngleRightIcono = styled(FaAngleRight)`
    display:none;
    @media (min-width:725px){
        font-size:20px;
        display:block;
        cursor: pointer;
    }
`
export const FaAngleLeftIcono = styled(FaAngleLeft)`
    display:none;
    @media (min-width:725px){
        font-size:20px;
        margin-left:40px;
        display:block;
        cursor: pointer;
    }
`