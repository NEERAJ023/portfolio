import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Div>
        <Nav>
        <Link to="/">home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        </Nav>
    </Div>
  )
}

export default Navbar

const Div=styled.div`
position:fixed;
top:89%;
left:40%;
width:300px;
height:50px;
z-index:1;
`
const Nav=styled.nav`
    display:flex;gap:20px;
    align-items:center;
    justify-content:space-between;
    background-color: rgba(255, 255, 255, 0.145);
    backdrop-filter: blur(10px);
    bottom:0px;
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding:30px;
    border-radius:60px;
    
    a{
        text-decoration:none;
        color:#219587;
    }
`