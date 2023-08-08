import { Contaier, Image } from '../styles/ProyectBoxComponents'

const ProyectBox = ({handleClick, image, title, episodes, country, id}) => {
  return (
    <Contaier onClick={()=>{handleClick(id)}}>
        <Image src={image} alt="proyect image" />
        <p>{title}</p>
        <p>{country}</p>
        <p>Episodes: {episodes}</p>
    </Contaier>
  )
}

export default ProyectBox