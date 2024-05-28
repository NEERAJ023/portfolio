import React from 'react'
import styled from 'styled-components'
import neeraj from '../../asstes/bikes.png'

const About = () => {
  return (
    <div>
        <Section>
            <div className='img'>
            <img src={neeraj} alt='pic'></img>
            </div>
            <Div>
              <h1>ABOUT ME</h1>
               <h2>I Am a <Span>Full-Stack</Span> Developer</h2> 
               <h2><Span>NE</Span>ER<Span>A</Span>J</h2>
               <h3><Span>761</Span>768<Span>615</Span>8</h3>
               <h3><Span>neer</Span>aj23129<Span>9@ga</Span>mil.com</h3>
               <div className='btn'>
                <Button ><a className='a' href="https://github.com/NEERAJ023">GIT</a></Button>
                <Button>Contact</Button>
               </div>
            </Div>
        </Section>
    </div>
  )
}

export default About

const Section=styled.section`
display:flex;
width:1200px;
margin:auto;
justify-content:space-evenly;

.img{
  
  filter:blur(4px);
border-radius:50%;
overflow:hidden;
box-shadow:2px 2px 100px #219587;
}
.a{
   text-decoration:none;
   color:white;
}
.btn{
  display:flex;
  gap:30px;
}
`
const Button=styled.button`
background-color:#219587;
border:none;
width:140px;
height:40px;
border-radius:40px;
color:white;

`
const Div=styled.div`
display:flex;
flex-direction:column;
gap:40px;
margin-top:40px;
h1{
  color:white;
    font-size:3.6rem;
}
h2{
  color:white;
    font-size:2rem;
}
`
const Span=styled.span`
color:#219587;
`