import hbo from "../Images/hbo_max.png";
import tmobile from "../Images/t-mobile.png";
import theater from "../Images/theater.png";
import unision from "../Images/uniision.png";
import turner from "../Images/turner.png";
import tucuman from "../Images/Tucuman.png";
import santiago from "../Images/santiago.png";
import byutv from "../Images/byutv.png";
import fox from "../Images/fox.png";
import irsa from "../Images/irsa.png";
import jack from "../Images/jack.png";
import bsas from "../Images/bsas.png";
import number from "../Images/5y6.png";
import sysarmy from "../Images/sysarmy.png";
import coca from "../Images/coca-cola.png";
import dia from "../Images/dia.png";
import scion from "../Images/scion.png";
import discovery from "../Images/discovery.png";
import yahoo from "../Images/yahoo.png";
import fueltv from "../Images/fueltv.png";
import televisa from "../Images/Televisa.png";
import jujuy from "../Images/jujuy.png";
import haas from "../Images/Haas.png";
import viacom from "../Images/viacom.png";
import gif2 from "../Images/gif2.gif";
import { DivContent ,H3 , GIF, H5 ,Div } from "../Styles/Partners";



function Partners(){
    return(
        <DivContent id="partners">
            <H5 className="animate">CONFIANZA, CALIDAD Y RESULTADOS</H5>
            <H3>Nuestros <span>socios</span> <GIF src={gif2} alt=""/></H3> 
            <Div>
                <img src={hbo} alt="" />
                <img src={tmobile} alt="" />
                <img src={theater} alt="" />
                <img src={unision} alt="" />
                <img src={turner} alt="" />
                <img src={tucuman} alt="" />
                <img src={santiago} alt="" />
                <img src={byutv} alt="" />
            </Div>
            <Div>
                <img src={fox} alt="" />
                <img src={irsa} alt="" />
                <img src={jack} alt="" />
                <img src={bsas} alt="" />
                <img src={number} alt="" />
                <img src={sysarmy} alt="" />
                <img src={coca} alt="" />
                <img src={dia} alt="" />
            </Div>
            <Div>
                <img src={scion} alt="" />
                <img src={discovery} alt="" />
                <img src={yahoo} alt="" />
                <img src={fueltv} alt="" />
                <img src={televisa} alt="" />
                <img src={jujuy} alt="" />
                <img src={haas} alt="" />
                <img src={viacom} alt="" />
            </Div>
        </DivContent>
    )
}

export default Partners