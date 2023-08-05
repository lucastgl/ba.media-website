import gif2 from "../Images/gif2.gif";
import images from "../Images/images.js";
import {H3, H5, DivContent,GIF, ColumnWrapper } from "../Styles/Partners";
import { useEffect, useState } from 'react';


function Partners(){
    const [showAnimate, setShowAnimate] = useState(false);
    
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
        <DivContent id="partners">
            <H5 showAnimate={showAnimate}>CONFIANZA, CALIDAD Y RESULTADOS</H5> 
            <H3 showAnimate={showAnimate}>Nuestros <span>socios</span><GIF src={gif2} alt=""/></H3>
            <div style={{ overflowX: "hidden" }}>
              <ColumnWrapper>
                  {images.map((image,index) => (
                      <img src={image.img} key={index} alt={image.alt} />
                      ))}
              </ColumnWrapper>
            </div>
        </DivContent>
    )
}

export default Partners