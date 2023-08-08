//import React from 'react'
import Footer from './Footer';
import {H1, P,GalleryBox } from "../Styles/Proyects.js";
import MasterChefimage from "../Images/MASTERCHEF.jpg"
import BakeOffimage from "../Images/BAKEOFF.jpg"
import ElDomoimage from "../Images/ELDOMODELDINERO.jpg"
import ElToqueimage from "../Images/ELTOQUEDEAARON.png"
import QatarLatinoimage from "../Images/QATARLATINO.png"
import Elementoimage from "../Images/4ELEMENTOS.jpg"
import elSaborDeAaron from "../Images/ELSABORDEAARON.png";
import offline from "../Images/OFFLINE.jpg";
import perdidosEnLaTribu from "../Images/PERDIDOSENLATRIBU.png";
import laColeccion from "../Images/LACOLECCION.jpg";
import myManCan from "../Images/MYMANCAN.jpg";
import goalStars from "../Images/GOALSTARS.jpg"
import nerdeala from "../Images/NERDEARLA.jpg"
import foodSound from "../Images/FOODSOUND.jpg"
import exodo from "../Images/EXODO.jpg"
import tucumanLate from "../Images/TUCUMANLATE.jpg"
import elGranBartender from "../Images/ELGRANBARTENDER.jpg"
import elEmprendedorDelMillon from "../Images/ELEMPRENDEDOR.jpg"
import ProyectPageBox from "../Components/ProyectPageBox";
import ButtonMobile from "./ButtonMobile.jsx";
//import { useEffect, useState } from 'react';

const Proyects = () => {
  const gallery = [
    {
      id: 1,
      image: MasterChefimage,
      title: "MasterChef",
      country: "Bolivia/ Uruguay/ Paraguay/ Dominican Republic/ Argentina/ USA",
      network: " Canal 10/ Telefuturo/ Tele sistemas/ Telefe/ Estrella Tv/ Unitel",
      genre:"Talent Show",
      episodes: "120+"
    },
    {
      id: 2,
      image: BakeOffimage,
      title: "Bake Off Celebrity México",
      country: "Mexico",
      network: "HBO Max",
      genre : "Talent Show",
      episodes: 8
    },
    {
      id: 3,
      image: ElDomoimage,
      title: "El Domo del Dinero",
      country: "USA",
      network: "Telemundo",
      genre:"Entertainment",
      season : 1,
      episodes: 62,
    },
    {
      id: 4,
      image: ElToqueimage,
      title: "El toque de Aarón",
      country: "USA",
      network: "Discovery Familia",
      genre:"Entertainment",
      season: 1,
      episodes: 6,
    },
    {
      id: 5,
      image: QatarLatinoimage,
      title: "Qatar Latino",
      country: "USA",
      network: "Discovery Familia",
      genre:"Entertainment",
      season: 1,
      episodes: 6,
    },
    {
      id: 6,
      image: Elementoimage,
      title: "4 Elementos",
      country: "México",
      network: "Televisa",
      genre:"Entertainment",
      episodes: 80,
      season:" 1 & 2"
    },
    
    {
      id: 7,
      image: elSaborDeAaron,
      title: "El sabor de Aarón",
      country: "USA",
      network: "Discovery Familia",
      genre:"Entertainment",
      episodes: 6,
      season: 1
    },
    {
      id: 8,
      image: offline,
      title: "Offline",
      country: "USA",
      network: "BYU TV",
      genre:"Reality",
      episodes: 12,
    },
    {
      id: 9,
      image: perdidosEnLaTribu,
      title: "Perdidos en la Tribu",
      country: "Argentina, Belgium, Denmark & Sweden",
      network: "Telefe, TV3 & Kanal 5",
      genre:"Entertainment"
      //episodes: 6,
    },
    {
      id: 10,
      image: laColeccion,
      title: "La Colección",
      country: "Argentina",
      network: "Telefe",
      genre:"Branded Content",
      episodes: 6,
    },
    {
      id: 11,
      image: myManCan,
      title: "My Man Can",
      country: "USA",
      network: "ABC",
      genre:"Entertainment",
      episodes: 6,
    },
    {
      id: 12,
      image: goalStars,
      title: "Goal Stars",
      country: "Isreel",
      network: "HOT TV",
      genre:"Reality/Comedy",
      episodes: 30,
    },
    {
      id: 13,
      image: nerdeala,
      title: "Nerdeala",
      country: "Argentina",
      location: "Konex",
      streamLiveEvent: "conferences & workshops",
      days: 5
    },
    {
      id: 14,
      image: foodSound,
      title: "Food Sound",
      country: "Argentina",
      LOCATION : "Costanera Vicente López",
      liveEvent : "Food & music Festival",
      days: 2
    },
    {
      id: 15,
      image: exodo,
      title: "Éxodo",
      country: "Argentina",
      genre:"4D Experience",
    },
    {
      id: 16,
      image: tucumanLate,
      title: "Tucuman Late",
      country: "Argentina",
      location : "Tucumán Racetrack",
      liveEvent: "Music and Food Festival",
      days: 3
    },
    {
      id: 17,
      image: elGranBartender,
      title: "El Gran Bartender",
      country: "Argentina",
      network: "Telefe",
      genre:"Talent Show",
      episodes: 32,
    },
    {
      id: 18,
      image: elEmprendedorDelMillon,
      title: "El Emprendedor del Millón",
      country: "Argentina",
      network: "Telefe",
      genre:"Talent Show",
      episodes: 13,
    }
  ];

  return (
    <>
      <H1 id="inicio">Proyectos</H1>
      <P>Descubrí nuestros proyectos audiovisuales de <span>gran impacto</span> </P>
      <ButtonMobile/>
          <GalleryBox>
            {
              gallery.map((proyect) => (
                <ProyectPageBox 
                  key={gallery.id}
                  {... proyect}
                >
                </ProyectPageBox>
              ))
            }
          </GalleryBox>
      <Footer/>
    </>
  )
}

export default Proyects