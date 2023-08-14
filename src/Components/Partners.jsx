import gif2 from "../Images/gif2.gif";
import images from "../mocks/images"
import {H3, H5, DivContent,GIF, ColumnWrapper } from "../Styles/Partners";
import { useEffect, useState, useContext } from 'react';
import { LenguageContext } from "../Context/LanguagesContext"; 


const Partners = () =>{
  const [showAnimate, setShowAnimate] = useState(false);
  const {state} = useContext(LenguageContext);
  
  useEffect(() => {
    const handleScroll = () => {
      const partnersSection = document.getElementById('partners');
      if (partnersSection ) {
        const rect = partnersSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setShowAnimate(true)
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
      <DivContent id="partners">
        
        {
          state.lenguage ? (
            <>
            <H5 showAnimate={showAnimate}>CONFIANZA, CALIDAD Y RESULTADOS</H5> 
            <H3 showAnimate={showAnimate}>Nuestros <span> socios</span><GIF src={gif2} alt=""/></H3>
            </>
          ) :
          (
            <>
            <H5 showAnimate={showAnimate}>TRUST, QUALITY AND RESULTS</H5> 
            <H3 showAnimate={showAnimate}>Our<span>partners</span><GIF src={gif2} alt=""/></H3>
            </>
          )
        }
        <div style={{ overflowX: "hidden" }}>
          <ColumnWrapper>
            {images.map((image,index) => (
              <img src={image.img} key={index} alt={image.alt} />
            ))}
          </ColumnWrapper>
        </div>
      </DivContent>
    </>
  )
}

export default Partners