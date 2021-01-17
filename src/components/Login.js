import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginForm from './LoginForm'
import usersService from '../services/users'
import { setUser } from '../reducers/userReducer'
import config from '../utils/config'
import { Button } from '@material-ui/core'

const Login = ({ loggedIn, handleLogout }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    if(loggedIn) {
        return <div className='center-view-page'>
            <h3>Already logged up</h3>
            <div className='info-text'>Please logout to login again</div>
            <Button onClick={handleLogout} color='primary'>Logout</Button>
        </div>
    }

    const handleLogin = (data) => {
        usersService.login(data)
        .then(response => {
            window.localStorage.setItem(config.LOCALSTORAGELOGGEDUSER, JSON.stringify(response))
            dispatch(setUser(response))
            history.replace('/')
        })
        .catch(error => {
            console.log('handleLogin error:', error)
        })
    }

    return (
        <div className='center-view-page'>
            <h2>Login</h2>
            <div className='form-container'>
                <LoginForm handleLogin={handleLogin} />
            </div>
            
        </div>
    )
}

export default Login