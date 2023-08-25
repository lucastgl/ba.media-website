import { Container, Image, ImageContainer, InfoText, Title } from '../Styles/ProyectBoxComponents'
import { useContext } from 'react';
import { LenguageContext } from '../Context/LanguagesContext';

const HomeProyectBox = ({handleClick, image, title, episodes, pais, country, id}) => {

  const {state} = useContext(LenguageContext);

  return (
    <Container onClick={()=>{handleClick(id)}}>
        <ImageContainer>
            <Image src={image} alt="proyect image" />
        </ImageContainer>
        <Title>{title}</Title>
        <InfoText>          
          { state.lenguage 
            ? 
            <>{pais}</> 
            :
            <>{country}</> 
          }
        </InfoText>
        <InfoText>
          { state.lenguage 
            ? 
            <>Episodios: {episodes}</> 
            :
            <>Episodes: {episodes}</> 
            }
            </InfoText>
    </Container>
  )
}


export default HomeProyectBox