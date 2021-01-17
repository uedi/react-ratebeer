import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import usersService from '../services/users'
import { setUser } from '../reducers/userReducer'
import config from '../utils/config'
import { Button } from '@material-ui/core'

const SignUp = ({ loggedIn, handleLogout }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    if(loggedIn) {
        return <div className='center-view-page'>
            <h3>Already signed up</h3>
            <div className='info-text'>Logout to sign up again</div>
            <Button onClick={handleLogout} color='primary'>Logout</Button>
        </div>
    }

    const handleSignUp = (data) => {
        usersService.signUp(data)
        .then(response => {
            window.localStorage.setItem(config.LOCALSTORAGELOGGEDUSER, JSON.stringify(response))
            dispatch(setUser(response))
            history.replace('/')
        })
        .catch(error => {
            console.log('handleSignUp error:', error)
        })
    }

    return (
        <div className='center-view-page'>
            <h2>Sign up</h2>
            <SignUpForm handleSignUp={handleSignUp}/>
        </div>
    )
}

export default SignUp