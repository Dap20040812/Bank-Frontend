import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import SavingsIcon from '@mui/icons-material/Savings';
import SendIcon from '@mui/icons-material/Send';

function SideBar() {
  return (
    <SideBarContainer>
        <SideBarItems>
            <Logo src='/images/logoB.png'/> 
            <Icon>
                <HomeIcon color='#172B3A' fontSize='large'/>
                <IconText>Home</IconText> 
            </Icon>
            <Icon>
                <AddCardIcon color='#172B3A' fontSize='large'/>
                <IconText>Add</IconText>
                <IconText>Account</IconText>
            </Icon>
            <Icon>
                <SavingsIcon color='#172B3A' fontSize='large'/>
                <IconText>Deposit</IconText>
            </Icon>
            <Icon>
                <SendIcon color='#172B3A' fontSize='large'/>
                <IconText>Transfer</IconText>
            </Icon>
        </SideBarItems>
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div `
    width: 5.5em;
    border-right: 1.75px solid #172B3A33;
`

const Logo = styled.img `
    width: 3.5rem;
    margin-top: 2vh;
    margin-bottom: 8vh;
`

const SideBarItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Icon = styled.div `
    margin: 3.5vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const IconText = styled.div `
    font-size: 0.9rem;
    font-weight: 600;
`