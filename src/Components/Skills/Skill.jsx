import React,{useState} from 'react'
import styled from 'styled-components'
import SkillDetail from './SkillDetail'
import { Data } from './skilldata'

const Skill = () => {
    const [skill,setskill]=useState(Data[0])
    const [isActive,setActive]=useState(false)

    function handledata(data){
         setskill(data)
        
    }
  return (
    <Section>
      <h2>Technical Proficiency</h2>
      <h6><span>MY</span> Talent</h6>
      <Div className="skill-content">
        <div className="skills">
            {Data.map((data,index)=>(
                <Div key={index}
                className="skill"
                onClick={()=>handledata(data)}
                >
                    <p>{data.title}</p>
                </Div>
            ))}
        </div>
        <div className="skillDetails">
           <SkillDetail
           value={skill.title}
           skills={skill.Skill}
           />
        </div>
      </Div>
    </Section>
  )
}

export default Skill

const Section =styled.section`
margin:100px auto;
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
const Div=styled.div`
    display:flex;
    width:100%;
   gap:80px;
   margin-top:20px;
    .skills{
        display:flex;
        width:600px;
        flex-wrap:wrap;
        gap:40px;
        margin-top:40px;
        justify-content:center;
    }
    .skill{
        border:1px solid #219587;
        width:210px;
        height:60px;
        border-radius:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        transition:all 0.5s;
    }
    .skill:hover{
        background-color:#219587;
    }

    .skilldetail{
    
    }
`