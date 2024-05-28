import React from 'react'
import styled from 'styled-components'

const ContactInput = () => {
  return (
    <Section>
        <Form>
        <Div>
            <div>
        <label for="name">YOUR FULL NAME</label>
        <input id='name' type='text' placeholder='' required></input>
        </div>
        <div>
        <label for="email">YOUR EMAIL ADDRESS</label>
        <input id='email' type='email' placeholder='' required></input>
        </div>
        </Div>
        <label for="subject">YOUR SUBJECT</label>
        <input id='subject' type='text' placeholder='' required></input>
        <label for="message">YOUR MESSAGE</label>
        <textarea id='message' type='text' placeholder='' rows={6} required></textarea>
        <Button>
            <p>Accept The Terms And Conditions</p>
                  <button>Send Message</button>
        </Button>
        </Form>
    </Section>
  )
}

export default ContactInput
const Section=styled.section`
    width:500px;
    padding:10px;
    
`
const Form=styled.form`
    display:flex;
    flex-direction:column;
   label{
    font-size:16px;
    font-weight:800;
    margin-bottom:10px;
    margin-left:20px;
   }
    input{
        border-radius:25px;
        height:40px;
        margin-bottom:20px;
        padding-inline:15px;
    }
    textarea{
        border-radius:20px;
        margin-bottom:40px;
        padding:5px 15px;
    }
`
const Div=styled.div`
   display:flex;
   gap:15px;
   input{
    width:200px;
    margin-top:10px;
   }
   
`
const Button=styled.div`
    display:flex;
    justify-content:flex-end;
    gap:25px;
    align-items:center;
    p{
        font-size:16px;
        font-weight:500;
    }
    button{
        height:40px;
        width:130px;
        border-radius:20px;
        font-weight:700;
        outline:none;
    }
`
