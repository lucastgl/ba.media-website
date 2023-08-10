import { DivContent,DivLogos,Logo,LogoApps, Content, Div} from "../Styles/Footer";
import logo from "../Images/logo.webp";
import vimeo from "../Images/vimeo.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {LenguageContext} from "../Components/Context/LanguagesContext";

function Footer(){
    const [showAnimate, setShowAnimate] = useState(false);
    const [animationShown, setAnimationShown] = useState(false);
    const PercentageMin = 0.3;
    const {state} = useContext(LenguageContext);

    useEffect(() => {
        const handleScroll = () => {
          const partnersSection = document.getElementById('footer');
          if (partnersSection && !animationShown) {
            const rect = partnersSection.getBoundingClientRect();
            const scrollMin = partnersSection.offsetHeight * PercentageMin;
            const isVisible = rect.top < window.innerHeight - scrollMin && rect.bottom  >= scrollMin;
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
  
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
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
                    <p> <Link to="/proyects">Proyectos</Link></p>
                    <p><a href="#partners" onClick={(event) => handleLinkClick(event, 'partners')} >Socios</a></p>
                    <p><a href="#team" onClick={(event) => handleLinkClick(event, 'team')}>Nosotros</a></p>
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
                    <p> <Link to="/proyects">Proyects</Link></p>
                    <p><a href="#partners" onClick={(event) => handleLinkClick(event, 'partners')} >Partners</a></p>
                    <p><a href="#team" onClick={(event) => handleLinkClick(event, 'team')}>Us</a></p>
                  </Div>
                  <Div>
                    <h4>CONTACT</h4>
                    <p>September 11,1888 2761,</p>
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
export default Footer