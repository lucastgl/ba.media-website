import React from 'react'
import './App.css'
import { routes, Navbar } from './Routes/Routes'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LenguageContextProvider from './components/Context/LanguagesContext'


function App() {

  return (
    <LenguageContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {
            routes.map(({id, path, Component}) =>(
              <Route key={id} path={path} element={<Component/>}/>
            ))
          }
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </LenguageContextProvider>
  )
}

export default App
