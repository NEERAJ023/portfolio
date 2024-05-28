import React from 'react'
import styled from 'styled-components'
import vimal from '../asstes/neeraj.png'
import shape1 from '../asstes/shape-1.png'
import shape2 from '../asstes/shape-2.png'


const Home = () => {
  return (
    <div>
        <Section>
            <Div>
                <p className='home_subtitle text_cs'>
                    HELLO,<Span>My Name Is</Span>
                </p>
                <h1 className='home_title text_cs'><Span>NE</Span>ER<Span>A</Span>J</h1>
                <p className='home_job'>
                    <Span className='text_cs'>I Am </Span><b>Web Developer</b>
                </p>
                <div className="homeimage_wrapper">
                    <div className="home_banner">
                        <img src={vimal} className='home_profile'></img>
                    </div>
                    
                </div>
                <img src={shape1} className='shape1 shape'></img>
                <img src={shape2} className='shape2 shape'></img>
                <p className='home__text'>From Rewari,Haryana.I have rich experience in web design,also I am good
                    at Development.
                </p>
                
                <div className="home_button">
                    <a href='' className='btn'>Download CV</a>
                    <a href='' className='hero_link'>My Skill</a>
                </div>
            </Div>
        </Section>
    </div>
  )
}

export default Home
const Section=styled.section`
    display:grid;
    min-height:100vh;
    align-items:center;
   margin-bottom:100px;
`
const Div=styled.div`
    width:1200px;
    margin:auto;
    padding-inline:12px;
    position:relative;
    .homeimage_wrapper{
        position:absolute;
        top:0;
        right:12px;
        width:100%;
        max-width:500px;
    }
    p{
        font-size:18px;
    }
    .shape{
        position:absolute;
        filter:invert(1);
        opacity:0.1;
    }
    .shape1{
        width:226px;
        height:226px;
        top:-6%;
        right:-6%;
    }
    .shape2{
        width:141px;
        height:141px;
        bottom:-68%;
        left:55%;
    }
    .home_banner{
        background-color:#219587;
        padding-bottom:100%;
        border-radius:50%;
        
    }
    .home_profile{
        position:absolute;
        bottom:0px;
        height:670px;
        border-radius:500px;
    }
.home_subtitle{
     font-weight:700;
    }
    .home_job{
     font-weight:700;
    }
    b{
       font-size:28px;
       margin-left:10px;
    }
    .home_title{
        font-size:84px;
        -webkit-text-stroke:1px #219587;
        margin-top:15px;
    }
    .text_cs{
        text-transform:uppercase;
       letter-spacing:0.05em;
    }
    .home__text{
        font-size:20px;
        margin-block:40px 28px;
        max-width:520px;
    }
    .home_button{
        display:flex;
        gap:40px;
        align-items:center;
        a{
            font-size:14px;
            color:white;
            text-decoration:none;
        }
        .btn{
            height:36px;
            width:130px;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:20px;
            position: relative;
            border:1px solid white;
            box-shadow:2px 2px 5px white;
        }
        .btn::before{
            content:'';
            position:absolute;
            inset:2px;
            background-color:#219587;
            border-radius: inherit;
            opacity:0;
            transform: scale(0.3);
            filter: blur(10px);
            transition:all 0.7s;
            z-index:-1;
        }
        .btn:hover::before{
            opacity:1;
            transform: scale(1);
            filter: blur(0);
        }
   
        .hero_link{
            color:white;
        }
        .hero_link::before{
            content:"";
            width:29px;
            height:1px;
            position:absolute;
            top:93.4%;
            left:11%;
            background-color:white;
            z-index:1;
        }
    }
    `
const Span=styled.span`
    color:#219587;
    
    `
    