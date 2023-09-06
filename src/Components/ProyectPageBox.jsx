import {Container,ImageContainer, Image, InfoText} from "../Styles/ProyectsPageBox";
import { LenguageContext } from '../Context/LanguagesContext';
import { useContext } from 'react';

const ProyectPageBox = ({handleClick, image, title, episodes, country, pais, genre, network, liveEvent, days, location, season,streamLiveEvent,id}) =>{
  const {state} = useContext(LenguageContext);
  return (
      <Container onClick={()=>{handleClick(id)}}>
        <ImageContainer>
            <Image src={image} alt="proyect image" />
          </ImageContainer>
          <h3>{title}</h3>
          <InfoText>
            {state.lenguage 
              ? 
              <>{pais}</> 
              :
              <>{country}</> 
              }
          </InfoText>
          {network && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Canal/Plataforma: {network}</> 
              :
              <>Network: {network}</> 
            }
            </InfoText>}
          {location && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Ubicación: {location}</> 
              :
              <>Location: {location}</> 
            }
          </InfoText>}
          {genre && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Género: {genre}</> 
              :
              <>Genre: {genre}</> 
              }
          </InfoText>}
          {season && 
          <InfoText>
            {state.lenguage 
            ? 
            <>Temporadas: {season}</> 
            :
            <>Season: {season}</> 
            }
          </InfoText>}
          {episodes && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Episodios: {episodes}</> 
              :
              <>Episodes: {episodes}</> 
            }
          </InfoText>}
          {liveEvent && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Transmisión en vivo: {liveEvent}</> 
              :
              <>Live Stream: {liveEvent}</> 
            }
          </InfoText>}
          {streamLiveEvent && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Evento en vivo: {streamLiveEvent}</> 
              :
              <>Stream Live Event: {streamLiveEvent}</> 
            }
          </InfoText>}
          {days && 
          <InfoText>
            {state.lenguage 
              ? 
              <>Dias: {days}</> 
              :
              <>Days: {days}</> 
            }
          </InfoText>}
      </Container>
    )
  }

export default ProyectPageBox