import Footer from "./Footer"
import {H1, P,GalleryBox } from "../Styles/Proyects.js";
import ButtonMobile from "./ButtonMobile";
import ProyectPageBox from "./ProyectPageBox";
import { galleryPage } from '../mocks/proyects'
import ProductPageDetail from "./ProductPageDetail"
import { useState, useContext } from 'react';
import { LenguageContext } from './Context/LanguagesContext';

const Proyects = () => {

  const [productSelected, setProductSelected] = useState();
  const {state} = useContext(LenguageContext)

  return (
    <>
    <div style={{position: "relative"}}>
      <ProductPageDetail productSelected={productSelected} onClose={()=>setProductSelected(undefined)}/>
      </div>
      {state.lenguage ? (
        <>
        <H1 id="inicio">Proyectos</H1>
        <P>Descubrí nuestros proyectos audiovisuales de <span>gran impacto</span> </P>
        </>
      ) : (
        <>
        <H1 id="inicio">Projects</H1>
        <P>Discover our high-impact <span> audiovisual projects.</span> </P>
        </>
      )
    }
      <ButtonMobile/>
          <GalleryBox>
            {
              galleryPage.map((proyect) => (
                <ProyectPageBox 
                  key={galleryPage.id}
                  {... proyect}
                  handleClick={setProductSelected}>
                </ProyectPageBox>
              ))
            }
          </GalleryBox>
      <Footer/>
    </>
  )
}

export default Proyects