import React from 'react'
import styled from 'styled-components'

const Contactpersonal = () => {
  return (
    <Div>
        <div>
            <h3>Address</h3>
            <h5>Rewari,Haryana</h5>
        </div>
        <div>
            <h3>Email</h3>
            <h5>neeraj231299@gmail.com</h5>
        </div>
        <div>
            <h3>Phone</h3>
            <h5>+9176-1768-6158</h5>
        </div>
        <div>
            <h3>Github</h3>
            <h5>NEERAJ023</h5>
        </div>
    </Div>
  )
}

export default Contactpersonal

const Div=styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
    margin-top:10px;
    h3{
        font-size:30px;
    }
    h5{
        font-size:16px;
        color:#868583;
    }
    div{
        display:flex;
        flex-direction:column;
        gap:10px;
    }
`