import React from 'react'
import SignUpForm from './SignUpForm'

const SignUp = () => {

    const handleSignUp = (data) => {
        console.log('sign up', data)
    }

    return (
        <div>
            <h2>Sign up</h2>
            <SignUpForm handleSignUp={handleSignUp}/>
        </div>
    )
}

export default SignUp