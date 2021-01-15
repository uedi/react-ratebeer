import React from 'react'
import LoginForm from './LoginForm'
import usersService from '../services/users'

const Login = () => {

    const handleLogin = (data) => {
        usersService.login(data)
        .then(response => {
            console.log(response)
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