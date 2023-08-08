import { useState } from 'react'
import { GalleryContainer, GalleryBox, Header } from '../styles/ProyectsGalleryComponents'
import ProyectBox from './ProyectBox'
import ProductDetail from './ProductDetail'
import { gallery } from '../mocks/proyects'

const ProyectsGallery = () => {

  const [productSelected, setProductSelected] = useState();
  return (
    <div style={{position: "relative"}}>
      <ProductDetail productSelected={productSelected} onClose={()=>setProductSelected(undefined)}/>
      <Header>
        <p>¿QUÉ HACEMOS?</p>
        <h2><span>Trabajos</span> destacados</h2>
      </Header>
      <GalleryContainer>
        <GalleryBox>
          {gallery.map((proyect) => (
            <ProyectBox
              key={proyect.id}
              {...proyect} //esto reemplaza lo de abajo
              // image={proyect.image}
              // title={proyect.title}
              // episodes={proyect.episodes}
              // country={proyect.country}
              // proyect={proyect}
              handleClick={setProductSelected}
            />
          ))}
        </GalleryBox>
      </GalleryContainer>
    </div>
  )
}

export default ProyectsGallery