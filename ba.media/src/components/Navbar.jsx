import  {useState, useEffect} from 'react'
import BAM from "../Images/BAM.webp"
import { Container, LogContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper,StyledLink } from '../styles/NavbarComponents'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom";

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

    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        setShowMobileMenu(!showMobileMenu);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <Container show={showNavbar} >
            <Wrapper open={showMobileMenu}>
                <LogContainer>
                    <Link to="/"><img src={BAM}/></Link>
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
                        <StyledLink to="/proyects">
                            <MenuItemLink>
                                Proyectos
                            </MenuItemLink>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'partners')} >
                            Socios
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'team')}>
                            Nosotros
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
