import React from 'react'
import styled from 'styled-components'

function Transaction() {
  return (
    <Container>
        <AccountID>Account ID: 1234</AccountID>
        <Action>Deposit/Transfer</Action>
        <Amount>Amount: 500</Amount>
    </Container>
  )
}

export default Transaction

const Container = styled.div `
    color: #172B3A;
    font-size: 1.3rem;
    display: flex;
`

const AccountID = styled.div `
    margin-left: 5vw;
    width: 15vw;
    margin-right: 7vw;
`

const Action = styled.div `
    width: 15vw;
    margin-right: 7vw;
`

const Amount = styled.div `
    width: 15vw;
`