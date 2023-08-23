import gif2 from "../Images/gif2.gif";
import images from "../mocks/images"
import { H3, H5, DivContainer, DivContent, GIF, ColumnWrapper } from "../Styles/Partners";
import { useEffect, useState, useContext, useRef } from 'react';
import { LenguageContext } from "../Context/LanguagesContext";

const Partners = () => {
  const [showAnimate, setShowAnimate] = useState(false);
  const { state } = useContext(LenguageContext);
  const partnersRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const partnersSection = document.getElementById('partners');
      if (partnersSection) {
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

  useEffect(() => {
    const scrollAutomatically = () => {
      if (autoScroll) {
        setCurrentX(prev => {
          let nextTranslateX = prev - 2;
          const maxTranslateX = -(partnersRef.current.offsetWidth - partnersRef.current.parentElement.offsetWidth);

          if (nextTranslateX < maxTranslateX) {
            nextTranslateX = maxTranslateX;
            setAutoScroll(false);
          }
          return nextTranslateX;
        });
      }
    };
    const interval = setInterval(scrollAutomatically, 30);
    return () => clearInterval(interval);
  }, [autoScroll]);


  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setAutoScroll(false);
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
    setStartX(null);
    setIsScroll(false);
    setTimeout(() => setAutoScroll(true), 1000);
  };

  return (
    <>
      <DivContent id="partners">
        {state.lenguage ? (
          <>
            <H5 showAnimate={showAnimate}>CONFIANZA, CALIDAD Y RESULTADOS</H5>
            <H3 showAnimate={showAnimate}>Nuestros <span>socios</span><GIF src={gif2} alt="" /></H3>
          </>
        ) : (
          <>
            <H5 showAnimate={showAnimate}>TRUST, QUALITY AND RESULTS</H5>
            <H3 showAnimate={showAnimate}>Our <span>partners</span><GIF src={gif2} alt="" /></H3>
          </>
        )}
        <DivContainer>
          <ColumnWrapper
            ref={partnersRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            isScroll={isScroll}
            currentX={currentX}
          >
            {images.map((image, index) => (
              <img src={image.img} key={index} alt={image.alt} />
            ))}
          </ColumnWrapper>
        </DivContainer>
      </DivContent>
    </>
  )
}

export default Partners;
