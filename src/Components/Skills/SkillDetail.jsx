import React from 'react'
import styled from 'styled-components'

const SkillDetail = ({value,skills}) => {
  return (
    <Div>
        <h4>{value}</h4>
        <div className="cards">
        {skills.map((item,i)=>(
            <div className="card" key={i}>
            <div className="card1" >
                
                <h3>{item.skill}</h3>
                <p>{item.percentage}</p>
            </div>
            <div className="skill_progressbar">
            <div className="skill_progress" style={{width:item.percentage}}></div>
            </div>
            </div>
        ))}
        </div>
    </Div>
  )
}

export default SkillDetail

const Div=styled.div`
    display:flex;
    width:600px;
   flex-direction:column;
   margin-top:40px;
   border:3px solid #219587;
   min-height:23rem;
   border-radius:20px;
   .active{
    background-color:#219587;
   }
   h4{
    font-size:1.2rem;
    font-weight:700;
    padding:0.8rem 2rem;
    color:#219587;
    border-bottom:3px solid #219587;
   }
    .cards{
     padding:2rem;
    }
    .card1{
        display:flex;
        align-items:center;
        justify-content:space-between;
        h3{
font-size:1rem;
font-weight:600;
        }
        p{
             color:#0d4741;
        }
    }
    .skill_progressbar{
        width:100%;
       height: 0.5rem;
        background-color:#237b72;
        border-radius:0.5rem;
        margin:1rem 0;
        overflow:hidden;
    }
    .skill_progress{
        width:0%;
        height:0.5rem;
        border-radius:0.5rem;
        background-color:#5eb2aa;
    }
`