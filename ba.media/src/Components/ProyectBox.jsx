//import React from 'react'
import { Contaier, Image } from '../styles/ProyectBoxComponents'

const ProyectBox = ({image, title, country, network, genre}) => {
  return (
    <Contaier>
        <Image src={image} alt="proyect image" />
        <p>{title}</p>
        <p>{country}</p>
        <p>{network}</p>
        <p>{genre}</p>
    </Contaier>
  )
}

export default ProyectBox