import { useState, useEffect, useContext } from 'react';
import BAM from "../Images/BAM.webp";
import { Container, LogContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper, StyledLink, Select, Option } from '../Styles/NavbarComponents';
import { FaBars, FaTimes } from "react-icons/fa";
import { LenguageContext } from '../Context/LanguagesContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { state, dispatch } = useContext(LenguageContext);
    const toggleLanguage = () => {
        dispatch({ type: 'lenguage' });
    };

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [scrollPos, setScrollPos] = useState(window.scrollY);
    const [targetToScroll, setTargetToScroll] = useState(null);

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

    useEffect(() => {
        if (targetToScroll && location.pathname === '/') {
            const targetElement = document.getElementById(targetToScroll);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
            setTargetToScroll(null);
        }
    }, [location.pathname, targetToScroll]);

    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        setShowMobileMenu(false);
        
        if (location.pathname === '/projects') {
            setTargetToScroll(targetId);
            navigate('/');
        } else if (location.pathname === '/') {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleMenuItemClick = (event, defaultId, mobileId) => {
        let targetId;
    
        if (location.pathname === '/') {
            targetId = mobileId;
        } else {
            targetId = window.innerWidth <= 724 ? mobileId : defaultId;
        }
    
        handleLinkClick(event, targetId);
    };

    const scrollToBottom = () => {
        setShowMobileMenu(false);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
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
                        <MenuItemLink onClick={(event) => handleMenuItemClick(event, 'team', 'partners')} >
                            {state.lenguage ?  "Socios" : "Partners"}
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleMenuItemClick(event, 'trackrecord', 'team')}>
                            {state.lenguage ?  "Nosotros" : "Us"}
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={scrollToBottom}>
                            {state.lenguage ?  "Contacto" : "Contact"}
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            <Select onChange={toggleLanguage}  onClick={()=>{state.language ? 'ES' : 'EN'}}>
                                {
                                    state.language ? (
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

export default Navbar;
