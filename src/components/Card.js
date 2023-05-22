import React, { useState } from 'react'
import styled from 'styled-components'

function Card() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCard onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <FlipCardInner isFlipped={isFlipped}>
        <FlipCardFront>
          <Heading>MASTERCARD</Heading>
          <Logo viewBox="0 0 48 48" height="40" width="40" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg" className="logo">
            <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path>
            <path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path>
            <path d="M18,24c0,4.755,2.376,8.95,6,11.5c3.625-2.55,6-6.745,6-11.5s-2.375-8.949-6-11.5C20.376,15.051,18,19.245,18,24z" fill="#f0f0f0"></path>
          </Logo>
          <Chip viewBox="0 0 55 43" height="32" width="32" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg" className="chip">
            <g>
              <path fill="#3f3d56" d="M38,0H3C1.343,0,0,1.343,0,3v37c0,1.656,1.343,3,3,3h35c1.657,0,3-1.344,3-3V3C41,1.343,39.657,0,38,0z"></path>
              <path fill="#ececec" d="M2.514,34.126c0,0,2.171-2.184,4.75-2.184c2.579,0,9.184,0,9.184,0v-1.125h-9.75c-3.314,0-6,2.686-6,6v1.624H0V41h16v-0.126h-0.834V41h1.375v-2.376c0-2.828-2.172-5-5-5H2.514V34.126z"></path>
              <g fill="#ff0">
                <path d="M9 23H11V25H9zM13 23H15V25H13zM9 19H11V21H9zM13 19H15V21H13zM9 15H11V17H9zM13 15H15V17H13zM17 23H19V25H17zM21 23H23V25H21zM17 19H19V21H17zM21 19H23V21H21zM17 15H19V17H17zM21 15H23V17H21z"></path>
              </g>
              <path fill="#3f3d56" d="M44.486,26.314c0,0-2.172-2.185-4.75-2.185c-2.578,0-9.183,0-9.183,0v-1.124h9.75c3.313,0,6,2.686,6,6v1.625h2.515V41H34v-0.126h0.833V41h-1.374v-2.376c0-2.828,2.172-5,5-5H44.486V26.314z"></path>
              <g fill="#ff0">
                <path d="M38.486 15H40.486V17H38.486zM42.486 15H44.486V17H42.486zM38.486 19H40.486V21H38.486zM42.486 19H44.486V21H42.486zM38.486 23H40.486V25H38.486zM42.486 23H44.486V25H42.486zM34.486 23H36.486V25H34.486zM30.486 23H32.486V25H30.486zM34.486 19H36.486V21H34.486zM30.486 19H32.486V21H30.486zM34.486 15H36.486V17H34.486zM30.486 15H32.486V17H30.486z"></path>
              </g>
            </g>
          </Chip>
          <Number>1234 5678 9012 3456</Number>
          <Name>JOHN DOE</Name>
        </FlipCardFront>
        <FlipCardBack>
          <BalanceTitle>Account Balance:</BalanceTitle>
          <Balance>1000</Balance>
          <ButtonsContainer>
            <DepositButton>Deposit</DepositButton>
            <TransferButton>Transfer</TransferButton>
          </ButtonsContainer>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
}

export default Card

const FlipCard = styled.div`
  background-color: #1D3B64;
  width: 240px;
  height: 154px;
  perspective: 1000px;
  border-radius: 2vh;
  margin: 0 3vw;
`

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
`

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

const Heading = styled.p`
  position: absolute;
  letter-spacing: 0.2em;
  font-size: 0.6em;
  top: 3em;
  left: 14em;
  color: #F0F4EF;
`

const Logo = styled.svg`
  position: absolute;
  top: 5.5em;
  left: 11em;
`

const Chip = styled.svg`
  position: absolute;
  top: 1.75em;
  left: 2em;
`

const Number = styled.p`
  position: absolute;
  top: 6.5em;
  left: 1em;
  color: #F0F4EF;
  font-size: 0.9rem;
`

const Name = styled.p`
  position: absolute;
  bottom: 2.5em;
  left: 1em;
  color: #F0F4EF;
  font-size: 0.9rem;
`

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotateY(180deg);
  color: #F0F4EF;
`

const BalanceTitle = styled.div `
    text-align: left;
    margin-left: 1.75rem;
    font-size: 1.2em;
`

const Balance = styled.div `
    text-align: left;
    margin-left: 1.75rem;
`

const ButtonsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1.5rem;
`

const DepositButton = styled.div `
    background-color: #F4C93E;
    border-radius: 0.5rem;
    width: 5rem;
    height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #172B3A;
    font-weight: 600;
    cursor: pointer;
`

const TransferButton = styled.div `
    background-color: #F4C93E;
    border-radius: 0.5rem;
    width: 5rem;
    height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #172B3A;
    font-weight: 600;
    cursor: pointer;
`