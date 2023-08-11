import { useContext, useState } from 'react'
import { GalleryContainer, GalleryBox, Header } from '../Styles/ProyectsGalleryComponents'
import HomeProyectBox from './HomeProyectBox'
import HomeProductDetail from './HomeProductDetail'
import { gallery } from '../mocks/proyects'
import { LenguageContext } from "./Context/LanguagesContext"

const HomeProyectsGallery = () => {

  const [productSelected, setProductSelected] = useState();
  const {state} = useContext(LenguageContext);

  return (
    <div >
      
      <HomeProductDetail productSelected={productSelected} onClose={()=>setProductSelected(undefined)}/>
      
      <Header>
        {
          state.lenguage ? (
            <>
            <p>¿QUÉ HACEMOS?</p>
            <h2><span>Trabajos</span> destacados</h2>
            </>
          ):(
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
            <HomeProyectBox
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

export default HomeProyectsGallery