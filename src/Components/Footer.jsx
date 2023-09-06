import { DivContent, DivLogos, Logo, LogoApps, Content, Div } from "../Styles/Footer";
import logo from "../Images/Logo.webp";
import vimeo from "../Images/vimeo.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LenguageContext } from "../Context/LanguagesContext"; 

const Footer = () => {

  const [showAnimate, setShowAnimate] = useState(false);
  const [animationShown, setAnimationShown] = useState(false);
  const PercentageMin = 1;
  const { state } = useContext(LenguageContext);
  const navigate = useNavigate();


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

  const handleLinkClick = async (event, targetId) => {
    event.preventDefault();

    const scrollWhenReady = (element) => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                element.scrollIntoView({ behavior: "smooth" });
                observer.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        observer.observe(element);
    }

    if (window.location.pathname !== "/") {
        await navigate('/');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          scrollWhenReady(targetElement);
        }
    } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }
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
                  <p><a href="#partners" onClick={(e) => handleLinkClick(e, 'partners')}>Socios</a></p>
                  <p><a href="#team" onClick={(e) => handleLinkClick(e, 'team')}>Nosotros</a></p>
                </Div>
                <Div>
                  <h4>CONTACTO</h4>
                  <p>11 de Septiembre de 1888 2761,</p>
                  <p>C1428AJI CABA.</p>
                  <p>info@ba.media</p>
                </Div>
              </>
            ) : (
              <>
                <Div>
                  <h4>EXPLORE</h4>
                  <p><Link to="/projects" onClick={()=>{window.scrollTo(0,0);}}>Projects</Link></p>
                  <p><a href="#partners" onClick={(e) => handleLinkClick(e, 'partners')}>Partners</a></p>
                  <p><a href="#team" onClick={(e) => handleLinkClick(e, 'team')}>Us</a></p>
                </Div>
                <Div>
                  <h4>CONTACT</h4>
                  <p>11 de Septiembre de 1888 2761,</p>
                  <p>C1428AJI CABA.</p>
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
