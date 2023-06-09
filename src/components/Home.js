import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import SideBar from './SideBar'
import {useSelector} from "react-redux"
import {selecUserName} from '../features/user/UserSlice'

function Home() {

    const name = useSelector(selecUserName)

  return (
    <Container>
        <HomeWrapper>
            <SideBar />
            <ContentWrapper>
                <Title>Welcome {name} to Bank Buddy!</Title>
                <AccountsTitle>Your Accounts</AccountsTitle>
                <CardWrapper>
                    <Card />
                </CardWrapper>
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


const AccountsTitle = styled.div `
    font-size: 4.5vh;
    font-weight: 600;
    color: #E98A15;
    margin: 0 0 3vh 3vw;
`
