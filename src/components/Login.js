import React, { useState } from 'react'
import styled from 'styled-components'

function Login() {

  const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === ''  && password.trim() === '') {
      setEmailErrorMessage('Please fill in all fields.')
      setPasswordErrorMessage('Please fill in all fields.')
      return
    }

    if (email.trim() === '' ) {
      setEmailErrorMessage('Please fill in all fields.')
      if(!(password.trim() === '')) {
        setPasswordErrorMessage('')
      }
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailErrorMessage('Please enter a valid email address.')
      if(!(password.trim() === '')) {
        setPasswordErrorMessage('')
      }
      return
    }

    if(password.trim() === '') {
      setPasswordErrorMessage('Please fill in all fields.')
      if (emailRegex.test(email) || !(email.trim() === '' )) {
        setEmailErrorMessage('')
      }
      return
    }
    
    setEmailErrorMessage('')
    setPasswordErrorMessage('')
  }

  return (
    <Container>
        <LoginContainer>
          <LeftInfo>
            <Title> Buddy Bank </Title>
            <Info> Keep your money in a safe place.</Info>
            <AccountQuestion> {!isRegistering ? "Don't have an account yet?" : "Already have an account?"} </AccountQuestion>
            <RegisterAndLoginButton onClick={() => setIsRegistering(!isRegistering)}> {!isRegistering ? "Create Account" : "Log In"} </RegisterAndLoginButton>
          </LeftInfo>
          <LoginForm>
            <LoginText>{isRegistering ? "Create Account" : "Log In"}</LoginText>
            {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
            <EmailInput placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            {passwordErrorMessage && <ErrorMessage>{passwordErrorMessage}</ErrorMessage>}
            <PasswordInput placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <SendButton type='submit' onClick={handleFormSubmit}> Send </SendButton>
          </LoginForm>
        </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div `

  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #F0F4EF;
`

const LoginContainer = styled.div `

  width: 70vw;
  height: 70vh;
  border-radius: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  justify-content: space-between;
`

const LeftInfo = styled.div `

  margin-left: 4vw;
  margin-top: 5vh;
`

const LoginForm = styled.div `

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 40vw;
  border-radius: 35% 1.5rem 1.5rem 35%;
  background-color: #F3C633;
`

const Title = styled.h2 `
  
  color: #172B3A;
  font-size: 8vh;
`

const LoginText = styled.h2 `

  color: #172B3A;
  font-size: 6vh;
  margin-bottom: 6vh;
`

const EmailInput = styled.input `
  width: 25vw;
  height: 3vh;
  background: #F0F4EF;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  margin: 2vh;
`

const PasswordInput = styled.input `
  width: 25vw;
  height: 3vh;
  background: #F0F4EF;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  margin: 2vh;
`

const Info = styled.div `

  color: #E98A15;
  font-size: 4vh;
  font-weight: 650;
`

const SendButton = styled.div `

  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #1D3B64;
  padding: 0.7em 1.7em;
  margin-top: 2vh;
  font-size: 2.5vh;
  font-weight: 600;
  border-radius: 0.5em;
  background: #F0F4EF;
  border: 1px solid #F0F4EF;
  box-shadow: 4px 4px 10px #F5CF51,
             -2px -2px 5px #F6D465;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
  color: #F0F4EF;
  border: 1px solid #1D3B64;
  
  }

  &:hover:before {
    top: -35%;
    background-color: #1D3B64;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #1D3B64;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`

const RegisterAndLoginButton = styled.div `
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #F0F4EF;
  padding: 0.7em 1.7em;
  margin-top: 2vh;
  font-size: 2.5vh;
  font-weight: 600;
  border-radius: 0.5em;
  background: #172B3A;
  border: 1px solid #172B3A;
  box-shadow: 4px 4px 10px #F0F4EF,
             -2px -2px 5px #F0F4EF;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #F0F4EF;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
  color: #172B3A;
  border: 1px solid #172B3A;
  }

  &:hover:before {
    top: -35%;
    background-color: #F0F4EF;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #F0F4EF;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`

const AccountQuestion = styled.div `
  font-size: 2.25vh;
  margin-top: 7vh;
  font-weight: 600;
  color: #172B3A;
`

const ErrorMessage = styled.div `
  color: red;
  font-size: 2.25vh;
  align-self: flex-start;
  margin-left: 6vw;
  margin-top: 2vh;
`