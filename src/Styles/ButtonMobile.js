import styled from "styled-components";

export const Button = styled.button`
    position:fixed;
    width:50px;
    border-radius:50%;
    font-size:25px;
    bottom:0;
    right:0;
    padding:10px;
    margin-right:20px;
    margin-bottom:25px;
    z-index:90;
    //background-color:red;
    @media (min-width:750px){ 
        display:none;
    }
`