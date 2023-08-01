import { DivContent,DivLogos,Logo,LogoApps, Content, Div} from "../Styles/Footer";
import logo from "../Images/logo.webp";
import vimeo from "../Images/vimeo.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";

function Footer(){
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <>
        <DivContent>
            <DivLogos>
                <Logo src={logo} alt="" />
                <div>
                    <a href="https://vimeo.com/bamediaok" target="_black" ><LogoApps src={vimeo} alt="vimeo" /></a>
                    <a href="https://www.instagram.com/buenosaires.media/" target="_black" ><LogoApps src={instagram} alt="instagram" /></a>
                    <a href="https://www.linkedin.com/company/buenosairesmedia/" target="_black" ><LogoApps src={linkedin} alt="linkedin" /></a>
                </div>
            </DivLogos>
            <Content>
                <Div>
                    <h4>EXPLORA</h4>
                    <p>Proyectos</p>
                    <p><a href="#partners" onClick={(event) => handleLinkClick(event, 'partners')} >Socios</a></p>
                    <p><a href="#team" onClick={(event) => handleLinkClick(event, 'team')}>Nosotros</a></p>
                </Div>
                <Div>
                    <h4>CONTACTO</h4>
                    <p>11 de Septiembre de 1888 2761,</p>
                    <p>C1428AJI CABA.</p>
                    <p>info@ba.media</p>
                </Div>
            </Content>
        </DivContent>
        </>
    )
}
export default Footer