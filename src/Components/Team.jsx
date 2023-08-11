import { useState,useEffect, useContext } from "react";
import manolo from "../Images/manolo.jpg";
import gustavo from "../Images/Gustavo.jpg";
import jochi from "../Images/jochi.jpg";
import martin from "../Images/martin.jpg";
import { DivContent,Div,H3, H4, P } from "../Styles/Team";
import { LenguageContext } from "../Context/LanguagesContext";


function Team(){
    const [showAnimate, setShowAnimate] = useState(false);
    const PercentageMin = 1;
    const {state} = useContext(LenguageContext);

    useEffect(() => {
        const handleScroll = () => {
          const partnersSection = document.getElementById('team');
          if (partnersSection) {
            const rect = partnersSection.getBoundingClientRect();
            const scrollMin = partnersSection.offsetHeight * PercentageMin;
            const isVisible = rect.top < window.innerHeight - scrollMin && rect.bottom  >= scrollMin;
            if (isVisible) {
                setShowAnimate(true);
            }
          }
        };
        window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <>
        {
            state.lenguage ? (
                <H3 id="team" showAnimate={showAnimate}>Quiénes <span>somos</span></H3>
            )
            :
            (
                <H3 id="team" showAnimate={showAnimate}>Who we <span> are</span></H3>
            )
        }
        
        <DivContent>
            <Div>
                <img src={manolo} alt="" />
                <H4 showAnimate={showAnimate}>Juan M. Urdampilleta </H4>
                <P showAnimate={showAnimate}>CEO & Founder</P>
            </Div>
            <Div>
                <img src={gustavo} alt="" />
                <H4 showAnimate={showAnimate}>Gustavo N. Perednik</H4>
                <P showAnimate={showAnimate}>CCO & Founder</P>
            </Div>
            <Div>
                <img src={jochi} alt="" />
                <H4 showAnimate={showAnimate}>Jochi Urdampilleta </H4>
                <P showAnimate={showAnimate}>COO & Partner</P>
            </Div>
            <Div>
                <img src={martin} alt="" />
                <H4 showAnimate={showAnimate}>Martín Galleano</H4>
                <P showAnimate={showAnimate}>CFO</P>
            </Div>
        </DivContent>
        </>
    )
}

export default Team