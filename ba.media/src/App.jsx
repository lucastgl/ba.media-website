import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Partners from "./Components/Partners"
import Team from "./Components/Team"
import TrackRecord from "./Components/TrackRecord"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Partners/>
      <Team/>
      <TrackRecord/>
      <Footer></Footer>
    </>
  )
}

export default App
