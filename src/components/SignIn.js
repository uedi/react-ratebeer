import React from 'react'
import SignInForm from './SignInForm'
import usersService from '../services/users'

const SignIn = () => {

    const handleSignIn = (data) => {
        usersService.login(data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('handleSignIn error:', error)
        })
    }

    return (
        <div>
            <h2>Sign in</h2>
            <SignInForm handleSignIn={handleSignIn} />
        </div>
    )
}

export default SignIn