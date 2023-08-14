import { useContext, useState } from 'react'
import { GalleryContainer, GalleryBox, Header,DivButton,ButtonMore, DivLinea, Linea } from '../Styles/ProyectsGalleryComponents'
import HomeProyectBox from './HomeProyectBox'
import HomeProductDetail from './HomeProductDetail'
import { gallery } from '../mocks/proyects'
import { LenguageContext } from "../Context/LanguagesContext"
import {useNavigate} from "react-router-dom"


const HomeProyectsGallery = () => {

  const [productSelected, setProductSelected] = useState();
  const {state} = useContext(LenguageContext);
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate('/projects');
    const projectsPage = document.getElementById('inicio');
    if (projectsPage) {
      projectsPage.scrollIntoView({ behavior: "smooth" });
    }
  };


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
      <DivLinea><Linea></Linea></DivLinea>
      <DivButton><ButtonMore onClick={handleVerMas}>VER MÁS</ButtonMore></DivButton>
      
    </div>
  )
}

export default HomeProyectsGallery