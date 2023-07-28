import { DivContent,DivLogos,Logo,LogoApps, Content, Div} from "../Styles/Footer";
import logo from "../Images/logo.webp";
import vimeo from "../Images/vimeo.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";

function Footer(){
    return(
        <>
        <DivContent>
            <DivLogos>
                <Logo src={logo} alt="" />
                <div>
                <LogoApps src={vimeo} alt="" />
                <LogoApps src={instagram} alt="" />
                <LogoApps src={linkedin} alt="" />
                </div>
            </DivLogos>
            <Content>
                <Div>
                    <h4>EXPLORA</h4>
                    <p>Proyectos</p>
                    <p><a href="#partners">Socios</a></p>
                    <p><a href="#team">Nosotros</a></p>
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