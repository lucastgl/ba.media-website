import {Container, Image} from "../Styles/ProyectsPageBox";

function ProyectPageBox({image, title, episodes, country, genre, network, liveEvent, days, location, season,streamLiveEvent}){
    return (
      //Pasarle al container dentro del onClick la función para setear el estado de del productSelected y mostrar el detail
      <Container>
          <Image src={image} alt="proyect image" />
          <h3>{title}</h3>
          <p>Country : {country}</p>
          {network && <p>Network: {network}</p>}
          {genre && <p>Genre: {genre}</p>}
          {episodes && <p>Episodes: {episodes}</p>}
          {season && <p>Season: {season}</p>}
          {location && <p>Location: {location}</p>}
          {days && <p>Days: {days}</p>}
          {liveEvent && <p>Live Stream: {liveEvent}</p>}
          {streamLiveEvent && <p>Stream Live Event: {streamLiveEvent}</p>}
      </Container>
    )
  }

export default ProyectPageBox