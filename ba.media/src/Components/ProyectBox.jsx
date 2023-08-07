import React from 'react'
import { Contaier, Image } from '../styles/ProyectBoxComponents'

const ProyectBox = ({image, title, episodes, country}) => {
  return (
    <Contaier>
        <Image src={image} alt="proyect image" />
        <p>{title}</p>
        <p>{country}</p>
        <p>Episodes: {episodes}</p>
    </Contaier>
  )
}

export default ProyectBox