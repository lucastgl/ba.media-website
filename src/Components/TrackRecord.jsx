import {DivContent,H5, H2, GIF3, DivTitles,DivChild,Content, SVG, SVGVIDEO,StyledDiv, StyledDiv2} from "../Styles/TrackRecord";
import gif3 from "../Images/gif3.gif";
import { useState,useEffect, useContext } from "react";
import { LenguageContext } from "../Context/LanguagesContext"; 


function TrackRecord(){
    const [showAnimate, setShowAnimate] = useState(false);
    const [animationShown, setAnimationShown] = useState(false);
    const PercentageMin = 0.3;
    const {state} = useContext(LenguageContext);
    
    useEffect(() => {
        const handleScroll = () => {
          const partnersSection = document.getElementById('trackrecord');
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
    return(
        <DivContent id="trackrecord">
            <DivTitles>
              {
                state.lenguage
                ? (
                  <H5 showAnimate={showAnimate}>GESTIÓN, PROFESIONALISMO Y TRAYECTORIA</H5>
                )
                :(
                  <H5 showAnimate={showAnimate}>MANAGEMENT, PROFESSIONALISM AND TRAJECTORY</H5>
                )
              }
            <H2 showAnimate={showAnimate}>Track <span> Record</span> <GIF3 src={gif3} alt="" /></H2> 
            </DivTitles>
            <Content >
                <StyledDiv >
                  <DivChild showAnimate={showAnimate}>
                      <SVG viewBox="17 42 166.667 116.667" role="img" >
                      <path d="M175.333 137.133 142 116.4V84.825l33.333-21.292v73.6Zm-41.666 9.034a4.174 4.174 0 0 1-4.167 
                      4.166H29.5a4.174 4.174 0 0 1-4.167-4.166V54.5a4.174 4.174 0 0 1 4.167-4.167h100c2.3 0 4.167 1.875 4.167 
                      4.167v91.667Zm45.666-89.942a8.362 8.362 0 0 0-8.483.283L142 74.925V54.5c0-6.892-5.608-12.5-12.5-12.5h-100C22.608 
                      42 17 47.608 17 54.5v91.667c0 6.891 5.608 12.5 12.5 12.5h100c6.892 0 12.5-5.609 12.5-12.5v-19.959l28.933 18.009a8.404 
                      8.404 0 0 0 4.4 1.25 8.346 8.346 0 0 0 8.334-8.334v-73.6a8.334 8.334 0 0 0-4.334-7.308Z" 
                      fill="rgba(255, 255, 255, 0.9)"></path></SVG>
                      <p>3900+</p>
                      {
                        state.lenguage ? (
                          <span>HORAS DE CONTENIDO</span>
                        )
                        : (
                          <span>HOURS OF CONTENT</span>
                        )
                      }
                      </DivChild>
                </StyledDiv>

                <StyledDiv2>
                  <DivChild showAnimate={showAnimate}>
                      <SVG viewBox="28.5 35.5 142.999 129"><path fill="rgba(255, 255, 255, 0.9)" 
                      d="M28.5 35.5v97.345h47.631L63.318 164.5h11.384l12.813-31.655h7.21V164.5h10.55v-31.655h7.211l12.811 
                      31.655h11.384l-12.812-31.655h47.63V35.5H28.5zm132.448 86.79H39.05V46.055h121.898v76.235z"></path></SVG>
                      <p>5000+</p>
                      {
                        state.lenguage ? (
                          <span>EPISODIOS ENTREGADOS</span>
                        )
                        : (
                          <span>EPISODES DELIVERED</span>
                        )
                      }
                    </DivChild>
                </StyledDiv2>

                <StyledDiv>
                  <DivChild showAnimate={showAnimate}>
                      <SVGVIDEO viewBox="35 35 130 130"><path fill="rgba(255, 255, 255, 0.9)" d="M100 35c35.84 0 65 29.16 65 
                      65s-29.16 65-65 65-65-29.16-65-65 29.16-65 65-65Zm0 10c-30.33 0-55 24.67-55 55s24.67 55 55 55 55-24.67 
                      55-55-24.67-55-55-55ZM85 75l40 25-40 25V75Z" ></path></SVGVIDEO>
                      <p>150+</p>
                      {
                        state.lenguage ? (
                          <span>SHOWS DISTINTOS PRODUCIDOS</span>
                        )
                        : (
                          <span>DIFFERENT SHOWS PRODUCED</span>
                        )
                      }
                    </DivChild>
                </StyledDiv>

                <StyledDiv2>
                  <DivChild showAnimate={showAnimate}>
                      <SVG viewBox="33 29 133.332 141.667">
                      <path fill="rgba(255, 255, 255, 0.9)" d="M100.023 37.333c-1.908 0-12.633.225-20.066 8.209-5.8 6.233-8.284 
                      15.716-7.384 28.183.592 13.617 6.625 21.933 11.584 26.533a14.064 14.064 0 0 1 4.358 8.317c.875 5.983-2.808 
                      11.75-8.758 13.7l-15.842 5.258c-22.742 7.475-22.6 24.192-22.583 24.9l.008 5.734a4.173 4.173 0 0 0 4.167
                      4.166h108.325a4.179 4.179 0 0 0 4.166-4.166v-5.6c.017-.842.159-17.559-22.591-25.034l-15.934-5.291c-5.225-1.717-8.85-6.542-8.808-11.725a14.165 
                      14.165 0 0 1 4.508-10.259c4.959-4.6 10.992-12.916 11.584-26.408.9-12.592-1.584-22.075-7.384-28.308-7.433-7.984-18.15-8.209-19.35-8.209Zm53.809 
                      133.334H45.507c-6.9 0-12.5-5.609-12.5-12.5v-5.6c-.042-.792-.609-23.442 28.308-32.942l15.842-5.258c2.058-.684 3.4-2.65 3.116-4.6a5.827 5.827 
                      0 0 0-1.775-3.4C72.39 100.7 64.957 90.533 64.257 74.208c-1.067-14.758 2.166-26.341 9.6-34.341C83.49 29.525 96.748 29 99.315 29c3.267 0 
                      16.525.525 26.158 10.867 7.434 7.991 10.667 19.583 9.6 34.458-.7 16.208-8.133 26.375-14.233 32.033a5.858 5.858 0 0 0-1.842 4.225c-.016 
                      1.575 1.284 3.159 3.084 3.75l15.925 5.292c28.925 9.5 28.358 32.15 28.316 33.108l.009 5.434c0 6.891-5.609 12.5-12.5 12.5Z" 
                      ></path></SVG>
                      <p>70+</p>
                      {
                        state.lenguage ? (
                          <span>CLIENTES ALREDEDOR DEL MUNDO</span>
                        )
                        : (
                          <span>CUSTOMERS AROUND THE WORLD</span>
                        )
                      }
                    </DivChild>
                </StyledDiv2>
            </Content>
        </DivContent>
    )
}
export default TrackRecord