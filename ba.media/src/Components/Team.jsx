import manolo from "../Images/manolo.jpg";
import gustavo from "../Images/Gustavo.jpg";
import jochi from "../Images/jochi.jpg";
import martin from "../Images/martin.jpg";
import { DivContent,Div,H3 } from "../Styles/Team";


function Team(){
    return(
        <>
        <H3 id="team">Quiénes <span>somos</span></H3>
        <DivContent>
            <Div>
                <img src={manolo} alt="" />
                <h4>Juan M. Urdampilleta </h4>
                <p>CEO & Founder</p>
            </Div>
            <Div>
                <img src={gustavo} alt="" />
                <h4>Gustavo N. Perednik</h4>
                <p>CCO & Founder</p>
            </Div>
            <Div>
                <img src={jochi} alt="" />
                <h4>Jochi Urdampilleta </h4>
                <p>COO & Partner</p>
            </Div>
            <Div>
                <img src={martin} alt="" />
                <h4>Martín Galleano</h4>
                <p>CFO</p>
            </Div>

        </DivContent>
        </>
    )
}

export default Team