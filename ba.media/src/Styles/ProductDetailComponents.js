import styled from "styled-components"

export const  ModalContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 120;
`;

export const GalleryContent = styled.div`
    display: flex;

`;

export const GallerySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        max-width: 30vw;
        height: auto;
    }
`;

export const DetailSection = styled.div`
    display: felx;
    align-items: center;
    justify-content: center;

    img{
        max-width: 30vw:
        height: auto;
    }
`;