import React, {useState, useEffect} from 'react'
import BAM from "../Images/BAM.webp"
import { Container, LogContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from '../styles/NavbarComponents'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [scrollPos, setScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollPos = window.scrollY;
            setShowNavbar(scrollPos > currentScrollPos || currentScrollPos <= 0);
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    return (
        <Container show={showNavbar}>
            <Wrapper open={showMobileMenu}>
                <LogContainer>
                    <img src={BAM}/>
                </LogContainer>

                <MobileIcon open={showMobileMenu} onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes/> : <FaBars/>}  
                </MobileIcon>
                
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>
                            Home
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Proyectos
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Socios
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Negocio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Contacto
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>

        </Container>
    )
}

export default Navbar
