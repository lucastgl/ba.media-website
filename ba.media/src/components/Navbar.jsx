import  {useState, useEffect, useContext} from 'react'
import BAM from "../Images/BAM.webp"
import { Container, LogContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper,StyledLink, Select , Option} from '../styles/NavbarComponents'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom";
import {LenguageContext} from "../Components/Context/LanguagesContext";

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
                            {
                                state.lenguage ?  "Proyectos" : "Proyects"
                            }
                            </MenuItemLink>
                        </StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'partners')} >
                            {
                                state.lenguage ?  "Socios" : "Partners"
                            }
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={(event) => handleLinkClick(event, 'team')}>
                            {   
                                state.lenguage ?  "Nosotros" : "Us"
                            }
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            {   
                                state.lenguage ?  "Contacto" : "Contact"
                            }
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            <Select onChange={toggleLanguage} name = "hola " onClick={state.language ? 'ES' : 'EN'}>
                                {state.language ? (
                                    <>
                                        <Option value="EN">EN</Option>
                                        <Option value="ES">ES</Option>
                                    </>
                                ) 
                                : (
                                    <>
                                        <option value="ES">ES</option>
                                        <option value="EN">EN</option>
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
