import { Contaier, Image } from '../styles/ProyectBoxComponents'

const ProyectBox = ({handleClick, image, title, episodes, country, id}) => {
  return (
    <Contaier onClick={()=>{handleClick(id)}}>
        <Image src={image} alt="proyect image" />
        <p>{title}</p>
        <p>Paises: {country}</p>
        <p>Espisodios: {episodes}</p>
    </Contaier>
  )
}

export default ProyectBox