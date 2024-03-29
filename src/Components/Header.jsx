import React from 'react'
import {MobileView, DesktopView, HeaderBox, Title, TVgif } from '../Styles/HeaderComponents'
import BA from "../Images/BA-Logo.webp"
import Media from "../Images/Media-Logo.webp"
import TVGif from "../Images/TV.gif"
import logo from "../Images/LogoBAMGrande.png";


const Header = () => {
  return (
    <HeaderBox id="inicio">
        
      <MobileView>
        <Title>
          <img src={BA} alt="Logo-part1" />
          <img src={Media} alt="Logo-part1" />
        </Title>
        {/* <TVgif src={TVGif} alt="TV-gif" /> */}
      </MobileView>

      <DesktopView>
        <Title>
          <img src={logo} alt="Logo" />
          {/* <TVgif src={TVGif} alt="TV-gif" /> */}
          {/* <img src={Media} alt="Logo-part1" /> */}
        </Title>
      </DesktopView>

    </HeaderBox>
  )
}

export default Header;