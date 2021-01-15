import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginForm from './LoginForm'
import usersService from '../services/users'
import { setUser } from '../reducers/userReducer'

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogin = (data) => {
        usersService.login(data)
        .then(response => {
            dispatch(setUser(response))
            history.replace('/')
        })
        .catch(error => {
            console.log('handleLogin error:', error)
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm handleLogin={handleLogin} />
        </div>
    )
}

export default Login