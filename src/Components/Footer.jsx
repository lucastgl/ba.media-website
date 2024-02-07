import { DivContent, DivLogos, Logo, LogoApps, Content, Div } from "../Styles/Footer";
import logo from "../Images/Logo.webp";
import vimeo from "../Images/vimeo.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LenguageContext } from "../Context/LanguagesContext"; 

const Footer = () => {

  const [showAnimate, setShowAnimate] = useState(false);
  const [animationShown, setAnimationShown] = useState(false);
  const PercentageMin = 1;
  const { state } = useContext(LenguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [targetToScroll, setTargetToScroll] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const partnersSection = document.getElementById('footer');
      if (partnersSection && !animationShown) {
        const rect = partnersSection.getBoundingClientRect();
        const scrollMin = partnersSection.offsetHeight * PercentageMin;
        const isVisible = rect.top < window.innerHeight - scrollMin && rect.bottom >= scrollMin;
        if (isVisible) {
          setShowAnimate(true);
          setAnimationShown(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationShown]);

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
  
  return (
    <>
      <DivContent id="footer">
        <DivLogos>
          <Logo src={logo} alt="" showAnimate={showAnimate} />
          <div>
            <a href="https://vimeo.com/bamediaok" target="_black" ><LogoApps src={vimeo} alt="vimeo" /></a>
            <a href="https://www.instagram.com/buenosaires.media/" target="_black" ><LogoApps src={instagram} alt="instagram" /></a>
            <a href="https://www.linkedin.com/company/buenosairesmedia/" target="_black" ><LogoApps src={linkedin} alt="linkedin" /></a>
          </div>
        </DivLogos>
        <Content>
          {
            state.lenguage ? (
              <>
                <Div>
                  <h4>EXPLORA</h4>
                  <p><Link to="/projects" onClick={()=>{window.scrollTo(0,0);}}>Proyectos</Link></p>
                  <p><a href="#partners" onClick={(event) => handleMenuItemClick(event, 'team', 'partners')}>Socios</a></p>
                  <p><a href="#team" onClick={(event) => handleMenuItemClick(event, 'trackrecord', 'team')}>Nosotros</a></p>
                </Div>
                <Div>
                  <h4>CONTACTO</h4>
                  <p>121 NE 34th St, Unit 1612</p>
                  <p>Miami, FL 33137</p>
                  <p>info@ba.media</p>
                </Div>
              </>
            ) : (
              <>
                <Div>
                  <h4>EXPLORE</h4>
                  <p><Link to="/projects" onClick={()=>{window.scrollTo(0,0);}}>Projects</Link></p>
                  <p><a href="#partners" onClick={(event) => handleMenuItemClick(event, 'team', 'partners')}>Partners</a></p>
                  <p><a href="#team" onClick={(event) => handleMenuItemClick(event, 'trackrecord', 'team')}>Us</a></p>
                </Div>
                <Div>
                  <h4>CONTACT</h4>
                  <p>121 NE 34th St, Unit 1612</p>
                  <p>Miami, FL 33137</p>
                  <p>info@ba.media</p>
                </Div>
              </>
            )
          }
        </Content>
      </DivContent>
    </>
  )
}

export default Footer;
