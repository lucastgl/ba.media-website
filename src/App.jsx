import React from 'react'
import './App.css'
import { routes, Navbar } from './Routes/Routes'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LenguageContextProvider from './Context/LanguagesContext'
import ButtonMobile from "./Components/ButtonMobile"
import Footer from './Components/Footer'


function App() {

  return (
    <LenguageContextProvider>
      <BrowserRouter>
        <Navbar/>
        <ButtonMobile />
        <Routes>
          {
            routes.map(({id, path, Component}) =>(
              <Route key={id} path={path} element={<Component/>}/>
            ))
          }
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </LenguageContextProvider>
  )
}

export default App
