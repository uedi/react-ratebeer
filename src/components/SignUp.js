import React from 'react'
import SignUpForm from './SignUpForm'
import usersService from '../services/users'

const SignUp = () => {

    const handleSignUp = (data) => {
        usersService.signUp(data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('handleSignUp error:', error)
        })
    }

    return (
        <div>
            <h2>Sign up</h2>
            <SignUpForm handleSignUp={handleSignUp}/>
        </div>
    )
}

export default SignUp