import { useContext, useState } from 'react'
import { GalleryContainer, GalleryBox, Header } from '../styles/ProyectsGalleryComponents'
import ProyectBox from './ProyectBox'
import ProductDetail from './ProductDetail'
import { gallery } from '../mocks/proyects'
import { LenguageContext } from './Context/LanguagesContext'

const ProyectsGallery = () => {

  const [productSelected, setProductSelected] = useState();
  const {state} = useContext(LenguageContext);

  
  return (
    <div style={{position: "relative"}}>
      
      <ProductDetail productSelected={productSelected} onClose={()=>setProductSelected(undefined)}/>
      
      <Header>
        {
          state.lenguage ? (
            <>
            <p>¿QUÉ HACEMOS?</p>
            <h2><span>Trabajos</span> destacados</h2>
            </>
          ) :
          (
            <>
            <p>WHAT DO WE DO?</p>
            <h2><span>Featured </span> Works</h2>
            </>
          )
        }
      </Header>
      <GalleryContainer>
        <GalleryBox>
          {gallery.map((proyect) => (
            <ProyectBox
              key={proyect.id}
              {...proyect} 
              handleClick={setProductSelected}
            />
          ))}
        </GalleryBox>
      </GalleryContainer>
    </div>
  )
}

export default ProyectsGallery