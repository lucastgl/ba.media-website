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
    @media (min-width:1600px){
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        z-index: 120;
        background-color: rgba(246,249,245,1) ;
    }
`;

export const GalleryContent = styled.div`
    display:flex;
    flex-direction:column;
    @media (min-width:1600px){
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;
        width: 100vw;
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
    @media (min-width:1600px){
        align-items: center;
        justify-content:center;
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
    @media (min-width:1600px){
        width:500px;
        h2{
            font-size:50px;
        }
        // p{
        //     color:#21A6F3;
        // }
        img{
            max-width: 30vw:
            height: auto;
        }
    }
`;

export const FaTimesIcono = styled(FaTimes)`
    display:none;
    @media (min-width:1600px){
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
    background-color:red;
    @media (min-width:1600px){
       display:none;
    }
`
export const FaAngleRightIcono = styled(FaAngleRight)`
    display:none;
    @media (min-width:1600px){
        font-size:20px;
        display:block;
        cursor: pointer;
    }
`
export const FaAngleLeftIcono = styled(FaAngleLeft)`
    display:none;
    @media (min-width:1600px){
        font-size:20px;
        margin-left:40px;
        display:block;
        cursor: pointer;
    }
`