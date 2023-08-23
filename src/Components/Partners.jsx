import gif2 from "../Images/gif2.gif";
import images from "../mocks/images"
import {H3, H5, DivContainer,DivContent,GIF, ColumnWrapper } from "../Styles/Partners";
import { useEffect, useState, useContext, useRef} from 'react';
import { LenguageContext } from "../Context/LanguagesContext"; 


const Partners = () =>{
  const [showAnimate, setShowAnimate] = useState(false);
  const {state} = useContext(LenguageContext);
  const partnersRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  
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

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;
      const diffX = e.touches[0].clientX - startX;
      const minTranslateX = 0;
      const maxTranslateX = -(partnersRef.current.offsetWidth - partnersRef.current.parentElement.offsetWidth);
      let newTranslateX = currentX + diffX;
  
    if (newTranslateX < maxTranslateX) {
      newTranslateX = maxTranslateX;
      } else if (newTranslateX > minTranslateX) {
      newTranslateX = minTranslateX;
      }
      setIsScroll(true);
      setCurrentX(newTranslateX);
      };

  const handleTouchEnd = () => {
    if (startX === null) return;
    const minTranslateX = 0;
    let newTranslateX = currentX;
  
    if (newTranslateX > minTranslateX) {
      newTranslateX = minTranslateX;
    }
    setStartX(null);
    setCurrentX(0);
    setIsScroll(false); 
    
  };
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
            <H3 showAnimate={showAnimate}>Our <span>partners</span><GIF src={gif2} alt=""/></H3>
            </>
          )
        }
        <DivContainer>
          <ColumnWrapper
            ref={partnersRef} 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove} 
            onTouchEnd={handleTouchEnd} 
            isScroll={isScroll}
            >
            {images.map((image,index) => (
              <img src={image.img} key={index} alt={image.alt} />
            ))}
          </ColumnWrapper>
        </DivContainer>
      </DivContent>
    </>
  )
}

export default Partners
