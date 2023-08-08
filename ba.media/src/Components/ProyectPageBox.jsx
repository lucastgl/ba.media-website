import {Container, Image} from "../Styles/ProyectsPageBox";

function ProyectPageBox({image, title, episodes, country, genre, network, liveEvent, days, location}){
    return (
      <Container>
          <Image src={image} alt="proyect image" />
          <h3>{title}</h3>
          <p>Country : {country}</p>
          <p>Network : {network}</p>
          <p>Genre: {genre}</p>
          <p>Episodes: {episodes}</p>
          <p>Location : {location}</p>
          <p>Days: {days}</p>
          <p>LiveEvent: {liveEvent}</p>
      </Container>
    )
  }

export default ProyectPageBox