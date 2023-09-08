import React, { useEffect, useContext } from 'react';
import { LenguageContext } from '../Context/LanguagesContext';
import About from "./About"
// import Footer from './Footer'
import Header from './Header'
import Partners from './Partners'
import Team from "./Team"
import TrackRecord from './TrackRecord'
import HomeProyectsGallery from './HomeProyectsGallery'

const Home = () => {

  const { selectedComponent, setSelectedComponent } = useContext(LenguageContext);

  useEffect(() => {
    if (selectedComponent) {
      const targetElement = document.getElementById(selectedComponent);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setSelectedComponent(undefined);
    }
  }, [selectedComponent, setSelectedComponent]);

  return (
    <>
      <Header/>
      <About/>
      <HomeProyectsGallery/>
      <Partners/>
      <Team/>
      <TrackRecord/>
      {/* <Footer/> */}
    </>
  )
}

export default Home;