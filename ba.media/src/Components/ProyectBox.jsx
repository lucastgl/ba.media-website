import { Contaier, Image } from '../Styles/ProyectBoxComponents'

const ProyectBox = ({handleClick, image, title, episodes, country, id}) => {
  return (
    <Contaier onClick={()=>{handleClick(id)}}>
        <Image src={image} alt="proyect image" />
        <h3>{title}</h3>
        <p>Paises: {country}</p>
        <p>Espisodios: {episodes}</p>
    </Contaier>
  )
}

export default ProyectBox