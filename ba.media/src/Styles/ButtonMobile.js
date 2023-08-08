import styled from "styled-components";

export const Button = styled.button`
    position:fixed;
    width:50px;
    padding:10px;
    border-radius:50%;
    font-size:25px;
    bottom:0;
    right:0;
    margin-right:20px;
    margin-bottom:20px;
    z-index:99;
    @media (min-width:1600px){ 
        display:none;
    }
`