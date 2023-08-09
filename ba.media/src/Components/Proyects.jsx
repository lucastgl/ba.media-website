import Footer from './Footer';
import {H1, P,GalleryBox } from "../Styles/Proyects.js";
import ButtonMobile from "../Components/ButtonMobile";
import ProyectPageBox from "../Components/ProyectPageBox";
import { galleryPage } from '../mocks/proyects'
import ProductDetail from './ProductDetail'
import { useState, useContext } from 'react';
import { LenguageContext } from './Context/LanguagesContext';

const Proyects = () => {

  //el estado de producto seleccionado
  const [productSelected, setProductSelected] = useState();
  const {state} = useContext(LenguageContext)

  return (
    <>
      {/* Aca va el productDetail */}
      <ProductDetail productSelected={productSelected} onClose={()=>setProductSelected(undefined)}/>
      {state.lenguage ? (
        <>
        <H1 id="inicio">Proyectos</H1>
        <P>Descubrí nuestros proyectos audiovisuales de <span>gran impacto</span> </P>
        </>
      ) : (
        <>
        <H1 id="inicio">Proyects</H1>
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
                  handleClick={setProductSelected}

                  //pasarle el handle click para abrir el detail
                >
                </ProyectPageBox>
              ))
            }
          </GalleryBox>
      <Footer/>
    </>
  )
}

export default Proyects