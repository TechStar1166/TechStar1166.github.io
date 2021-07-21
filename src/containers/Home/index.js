import React from 'react'
import FormInput from '../TodoList/components/FormInput'
import { Title, Subtitle, Centered, SButton, DDescription, Lline } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import UserName from './username'

const Home = () => {
  const [userName, setUserName] = useState("")

  return(
    <>
      <Subtitle>
        <br/>Please enter your name below
      </Subtitle>
      <Centered>
        <FormInput
          type="text"
          placeholder="Type item here"
          value={userName}
          setValue={setUserName}
        />  
      </Centered>
      
      <Title primary>
        Hello {userName} and welcome to CL2C@hsa! 
      </Title>
      <Title>
        Or in other words Coding Level II @ HSA
      </Title>
      <Title>
        <Lline>
          ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Lline>
      </Title>
      <Title>
        <DDescription>
          This website was completed as the final project for the Coding Level II @Home course @ HSA and below is a quick description!<br/>          The instructors for the course were Clarissa Briasco-Stewart and Eletria Biswas, the coding lauguages used were JavaScript, CSS, and HTML. <br/>This website uses most of the things learned and used in the course.
        </DDescription>
      </Title>   
      <Title>   
        <DDescription> 
        </DDescription>
      </Title>      
      <Centered>
        <SButton>
        <Link to="/list" style={{color: "white"}}>Go to Todo List</Link>
        </SButton>    
        <SButton>
        <Link to="/GCD" style={{color: "white"}}>Go to General</Link>
        </SButton> 
        <SButton>
        <Link to="/CCL1A" style={{color: "white"}}>Go to CCL1A</Link>
        </SButton>         
      </Centered>     
    </>
  )
}


export default Home