import React, { useContext, useEffect, useRef } from 'react';
import { AboutContainer , TextContainer, Text, VideoContainer, Video} from '../styles/AboutComponents';
import Player from '@vimeo/player';
import {LenguageContext} from "../Components/Context/LanguagesContext";

const About = () => {

  const {state} = useContext(LenguageContext);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const options = {
        id: 832656662,
        autopause: true,
        autoplay: false,
      };

      playerRef.current = new Player(videoRef.current, options);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playerRef.current.play();
          } else {
            playerRef.current.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <AboutContainer>
        <TextContainer>
          {
            state.lenguage ? (
              <Text>Con <span style={{color: "#3D9BE9"}}>el mejor equipo</span> de trabajo, combinamos creatividad, agilidad y eficiencia consiguiendo como resultado contenido audiovisual <span style={{color: "#FF0099"}}>de alta calidad.</span></Text>

            ) 
            :
            ( <Text>
              With the<span style={{color: "#3D9BE9"}}> best team</span>, we combine creativity, agility, and efficiency, 
              achieving high-quality audiovisual <span style={{color: "#FF0099"}}> content as a result.</span></Text>)
          }
        </TextContainer>
        <VideoContainer>
          <Video ref={videoRef}/>
        </VideoContainer>
    </AboutContainer>
  );
}

export default About;
