import { useState, useEffect, useContext } from 'react';
import BAM from "../Images/BAM.webp";
import { Container, LogContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper, StyledLink, Select, Option } from '../Styles/NavbarComponents';
import { FaBars, FaTimes } from "react-icons/fa";
import { LenguageContext } from '../Context/LanguagesContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { state, dispatch } = useContext(LenguageContext);

    const toggleLanguage = () => {
        dispatch({ type: 'lenguage' });
    };

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
        setShowMobileMenu(false);
        
        if (window.location.pathname === '/') {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = `/`;
        }
    };

    return (
        <Container shouldShow={showNavbar} >
            <Wrapper open={showMobileMenu}>
                <LogContainer>
                    <Link to="/"><img src={BAM} alt="Logo"/></Link>
                </LogContainer>
                <MobileIcon open={showMobileMenu} onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes/> : <FaBars/>}  
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <StyledLink to="/">
                            <MenuItemLink onClick={()=> setShowMobileMenu(false)}>
                                Home
                            </MenuItemLink>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="/projects" onClick={()=> setShowMobileMenu(false)}>
                            <MenuItemLink>
                                {state.lenguage ?  "Proyectos" : "Projects"}
                            </MenuItemLink>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'partners')} >
                            {state.lenguage ?  "Socios" : "Partners"}
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'team')}>
                            {state.lenguage ?  "Nosotros" : "Us"}
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'footer')}>
                            { state.lenguage ?  "Contacto" : "Contact"}
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            <Select onChange={toggleLanguage}  onClick={()=>{state.language ? 'ES' : 'EN'}}>
                                {state.language ? (
                                    <>
                                    <Option value="EN" >EN</Option>
                                    <Option value="ES" >ES</Option>
                                    </>
                                ) 
                                : (
                                    <>
                                    <Option value="ES" >ES</Option>
                                    <Option value="EN" >EN</Option>
                                    </>
                                )
                                }
                            </Select>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Navbar
