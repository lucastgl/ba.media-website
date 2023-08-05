import React, {useState} from 'react'
import BAM from "../Images/BAM.webp"
import { Container, LogContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from '../styles/NavbarComponents'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <LogContainer>
                    <img src={BAM}/>
                </LogContainer>

                <MobileIcon onClick={()=> setShowMobileMenu(!showMobileMenu)}>
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