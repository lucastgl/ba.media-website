import {Container,ImageContainer, Image, InfoText} from "../Styles/ProyectsPageBox";

function ProyectPageBox({handleClick, image, title, episodes, country, genre, network, liveEvent, days, location, season,streamLiveEvent,id}){
    return (
      <Container onClick={()=>{handleClick(id)}}>
        <ImageContainer>
            <Image src={image} alt="proyect image" />
          </ImageContainer>
          <h3>{title}</h3>
          <InfoText>Country : {country}</InfoText>
          {network && <InfoText>Network: {network}</InfoText>}
          {genre && <InfoText>Genre: {genre}</InfoText>}
          {episodes && <InfoText>Episodes: {episodes}</InfoText>}
          {season && <InfoText>Season: {season}</InfoText>}
          {location && <InfoText>Location: {location}</InfoText>}
          {days && <InfoText>Days: {days}</InfoText>}
          {liveEvent && <InfoText>Live Stream: {liveEvent}</InfoText>}
          {streamLiveEvent && <InfoText>Stream Live Event: {streamLiveEvent}</InfoText>}
      </Container>
    )
  }

export default ProyectPageBox