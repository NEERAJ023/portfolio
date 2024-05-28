import React,{useState} from 'react'
import styled from 'styled-components'

const Project = () => {
  return (
    <Section>
      <h2>Portfolio Projects</h2>
      <h6><span>MY</span> Cases</h6>
      
    </Section>
  )
}

export default Project

const Section =styled.section`
margin:80px auto;
width:90%;

h2{
    color:white;
    text-align:center;
    font-size:3rem;
}
h6{
    color:white;
    text-align:center;
    font-size:2rem;
}
span{
    color:#219587;
    text-align:center;
    font-size:1.4rem;
}
`