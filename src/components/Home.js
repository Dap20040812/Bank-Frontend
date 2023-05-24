import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import RecentTransactions from './RecentTransactions'
import SideBar from './SideBar'

function Home() {

  return (
    <Container>
        <HomeWrapper>
            <SideBar />
            <ContentWrapper>
                <Title>Welcome to Bank Buddy!</Title>
                <AccountsTitle>Your Accounts</AccountsTitle>
                <CardWrapper>
                    <Card />
                    <Card />
                    <AddCard>
                        <AddButton> 
                            <AddSymbol>
                                +
                            </AddSymbol>
                        </AddButton>
                    </AddCard>
                </CardWrapper>
                <RecentTransactions />
            </ContentWrapper>
        </HomeWrapper>
    </Container>
  )
}

export default Home

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

const HomeWrapper = styled.div `
    width: 90vw;
    height: 90vh;
    border-radius: 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
`

const ContentWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.div `
    font-size: 6vh;
    margin: 0 0 6vh 3vw;
    color: #172B3A;
`

const CardWrapper = styled.div `
    display: flex;
`

const AddCard = styled.div `
    background-color: #DDDACD;
    width: 240px;
    height: 154px;
    perspective: 1000px;
    border-radius: 2vh;
    margin: 0 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AddButton = styled.div `
    border-radius: 50%;
    height: 4.5em;
    width: 4.5em;
    background-color: #B6B4AB99;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
`

const AddSymbol = styled.div `
    font-size: 3em;
    color: #172B3A;
`

const AccountsTitle = styled.div `
    font-size: 4.5vh;
    font-weight: 600;
    color: #E98A15;
    margin: 0 0 3vh 3vw;
`