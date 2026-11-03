import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Services from './components/Services'
import Signup from './components/Signup'
import  {Routes, Route} from 'react-router'


function App() {
  return(

    <>
      <Nav/>

      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
 }

 export default App

// Component must start with a capital