import React from 'react'
import { HeaderBox, Title, TVgif } from '../styles/HeaderComponents'
import BA from "../Images/BA-Logo.webp"
import Media from "../Images/Media-Logo.webp"
import TVGif from "../Images/TV.gif"

const Header = () => {
  return (
    <HeaderBox>
        <Title>
            <img src={BA} alt="Logo-part1" />
            <img src={Media} alt="Logo-part1" />
        </Title>
        <TVgif src={TVGif} alt="TV-gif" />
    </HeaderBox>
  )
}

export default Header;