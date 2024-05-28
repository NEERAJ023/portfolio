import React from 'react'
import ContactInput from './ContactInput'
import styled from 'styled-components'
import Contactpersonal from './Contactpersonal'

const Contact = () => {
  return (
    <DD>
      <h1>Contact Me</h1>
      <p><span>LET'S</span> Talk About Idea's</p>
      <Div>
        <Contactpersonal/>
        <ContactInput/>
      </Div>
    </DD>
  )
}

export default Contact
const DD=styled.div`
    h1{
        text-align:center;
        font-size:3.5rem;
    }
    p{
        text-align:center;
        font-size:1.8rem;
    }span{
        font-size:1rem;
        color:#219587;
        font-weight:700;
    }
    margin:60px 0px;
`
const Div=styled.div`
    display:flex;
    width:1000px;
    margin:60px  auto;
    justify-content:space-between;
`