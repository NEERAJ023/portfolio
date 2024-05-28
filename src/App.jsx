

import styled from 'styled-components'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import viteLogo from '/vite.svg'
import "./index.css"

import Skill from './Components/Skills/Skill'
import Project from './Components/Projects/Project'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App

