import styled  from "styled-components"
import {Link} from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #EDEDED;
    position: fixed;
    top: 0;
    transition: top 0.3s;
    top: ${({ shouldShow }) => (shouldShow ? "0" : "-70px")};
    z-index: 100;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    @media screen and (max-width: 724px){
        background-color: ${({open}) => (open ? "#035772" : "#EDEDED")};
        transition: 0.5s all ease;
    }

`;

export const LogContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Inter Tight', sans-serif;
    @media screen and (mix-width: 1600px){
    }
`;

export const Select = styled.select`
    background-color: #035772;
    border: none;
    width:80px;
    color:grey;
    position:relative;
    bottom:450px;
    font-size:18px;
    option{
        background-color:white;
        font-size:12px;
    }
    @media (min-width:724px){
        font-size:15px;
        background-color: #EDEDED;
        border: none;
        width:90px;
        position:static;
        option{
            font-size:14px;
        }
        
    }
    
`
export const Option = styled.option`
    option::-moz-selection {
        background-color: red;
        color: initial;
    }

    option::selection {
        background-color: red;
        color: initial;
    }
    .bIruLN option {
        background-color: ORANGE;
    }
`


export const Menu = styled.ul`
    z-index: 100;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and  (max-width: 724px){
        background-color: #035772;
        position: absolute;
        top: 70px;
        left: ${({open}) => (open ? "0" : "-100%")};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    
    @media screen and  (max-width: 724px){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MenuItemLink = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #212121;
    font-family: 'Inter Tight', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: #1DA1F2;
        transition: 0.5 all ease;
    }

    @media screen and (max-width: 724px){
        width: 100%;
        color: #FFFFFF;
    }
    
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and  (max-width: 724px){
        display: flex;
        align-items: center;
        svg{
            fill: ${({open}) => (open ? "#FFFFFF" : "#212121")};
            margin-right: 1.6rem;
            font-size: 2em;
        }
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right:80px;
`;





