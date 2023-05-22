import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

function Deposit() {

    const [amount, setAmount] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (typeof amount != 'number') {
            setErrorMessage('Please input a number.')
            return
        }

        setErrorMessage('')
    }

  return (
    <Container>
        <Wrapper>
            <SideBar />
            <DepositWrapper>
                <Title>Make a Deposit</Title>
                <AccountTitle>
                    Please select the account you want to make the deposit to:
                </AccountTitle>
                <AccountInput placeholder='Account'/>
                <AmountTitle>
                    Please input the amount you want to deposit to the account:
                </AmountTitle>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <AmountInput placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <DepositButton onClick={handleSubmit}>Deposit</DepositButton>
            </DepositWrapper>
        </Wrapper>
    </Container>
  )
}

export default Deposit

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

const Wrapper = styled.div `
    width: 90vw;
    height: 90vh;
    border-radius: 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
`

const DepositWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.div `
    font-size: 6vh;
    margin: 0 0 6vh 3vw;
    color: #172B3A;
`

const AccountInput = styled.input `
    width: 25vw;
    height: 3vh;
    background: #F0F4EF;
    padding: 10px;
    border: 2px solid #DDDACD;
    outline: none;
    border-radius: 4px;
    margin: 2vh 0 4vh 3vw;
`

const AmountInput = styled.input `
    width: 25vw;
    height: 3vh;
    background: #F0F4EF;
    padding: 10px;
    border: 2px solid #DDDACD;
    outline: none;
    border-radius: 4px;
    margin: 2vh 0 4vh 3vw;
`

const ErrorMessage = styled.div `
  color: red;
  font-size: 2.25vh;
  align-self: flex-start;
  margin-left: 6vw;
  margin-top: 2vh;
`

const AccountTitle = styled.div `
    margin-left: 3vw;
    font-size: 4vh;
`

const AmountTitle = styled.div `
    margin-left: 3vw;
    font-size: 4vh;
`

const DepositButton = styled.div `

  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #1D3B64;
  padding: 0.7em 1.7em;
  margin: 2vh 0 0 3vw;
  width: 5vw;
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