import styled from 'styled-components';

export const Logo = styled.img`
    width:200px;

    @media (min-width:1600px){ 
        width:330px;
        height:53px; 
    }
`
export const LogoApps = styled.img`
    margin-top:40px;
    width:50px;
    height:50px;
    margin-right: 10px;
    cursor: pointer;
    @media (min-width:1600px){ 
        width:40px;
        height:40px;
        
    }
`
export const DivLogos = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (min-width:1600px){ 
        margin-right:40px;
        margin-top:100px;
    }
`
export const DivContent = styled.div`
    background-color:black;
    color:white;
    text-align:center;
    padding:10px;
    @media (min-width:1600px){  
        display:flex;
        justify-content:center;
        height:390px;
    }
`
export const Content = styled.div`
    margin-top:20px;
    display:flex;
    margin-left:60px;
    margin-bottom:40px;
    //background-color:violet;
    @media (min-width:1600px){  
        width:600px;
        margin-top:90px;
    }
`

export const Div = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-right:40px;
    a{
        color:white;
        font-size:17px;
    }
    p{
        font-size:15px;
    }
    @media (min-width:1600px){
        width:300px;
        h4{
            font-size:19px;
        }
    }
`