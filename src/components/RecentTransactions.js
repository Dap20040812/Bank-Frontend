import React from 'react'
import styled from 'styled-components'
import Transaction from './Transaction'

function RecentTransactions() {
  return (
    <Container>
        <Title>Your Recent Activity</Title>
        <TransactionsWrapper>
            <Line />
            <Transaction />
            <Line />
            <Transaction /> 
            <Line />
        </TransactionsWrapper>
    </Container>
  )
}

export default RecentTransactions

const Container = styled.div `

`

const Title = styled.div `
    font-size: 4.5vh;
    font-weight: 600;
    color: #E98A15;
    margin: 5vh 0 1vh 3vw;
`

const TransactionsWrapper = styled.div `
    padding-top: 1vh;
`

const Line = styled.div `
    border-top: 1.5px solid #B6B4AB;
    margin: 1.5vh 0 1.5vh 4vw;
`