import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import SavingsIcon from '@mui/icons-material/Savings';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch, useSelector} from "react-redux"
import { setUserLogin , selecUserName, setSignOut} from '../features/user/UserSlice'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

function SideBar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    const signOut = () => {
        dispatch(setSignOut());
        navigate("/login")
    }

  return (
    <SideBarContainer>
        <SideBarItems>
            <Logo src='/images/logoB.png'/> 
            <Icon>
                <StyledLink to='/' >
                    <HomeIcon color='#172B3A' fontSize='large'/>
                    <IconText>Home</IconText> 
                </StyledLink>
            </Icon>
            <Icon>
                <StyledLink to='/createaccount' >
                    <AddCardIcon color='#172B3A' fontSize='large'/>
                    <IconText>Add</IconText>
                    <IconText>Account</IconText>
                </StyledLink>
            </Icon>
            <Icon>
                <StyledLink to='/deposit' >
                    <SavingsIcon color='#172B3A' fontSize='large'/>
                    <IconText>Deposit</IconText>
                </StyledLink>
            </Icon>
            <Icon>
                <StyledLink to='/transfer' >
                    <SendIcon color='#172B3A' fontSize='large'/>
                    <IconText>Transfer</IconText>
                </StyledLink>
            </Icon>
            <Icon onClick={signOut}>
                    <LogoutIcon color='#172B3A' fontSize='large'/>
                    <IconText>Logout</IconText>
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
    margin: 2vh 0;
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

const StyledLink = styled(Link) `
    color: #172B3A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`