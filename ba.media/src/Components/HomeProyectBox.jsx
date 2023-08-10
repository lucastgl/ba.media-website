import { Container, Image, ImageContainer, InfoText, Title } from '../Styles/ProyectBoxComponents'

const HomeProyectBox = ({handleClick, image, title, episodes, country, id}) => {
  return (
    <Container onClick={()=>{handleClick(id)}}>
        <ImageContainer>
            <Image src={image} alt="proyect image" />
        </ImageContainer>
        <Title>{title}</Title>
        <InfoText>Paises: {country}</InfoText>
        <InfoText>Espisodios: {episodes}</InfoText>
    </Container>
  )
}


export default HomeProyectBox