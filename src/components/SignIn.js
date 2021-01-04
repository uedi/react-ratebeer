import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {

    const handleSignIn = (data) => {
        console.log('sign in: ', data)
    }

    return (
        <div>
            <h2>Sign in</h2>
            <SignInForm handleSignIn={handleSignIn} />
        </div>
    )
}

export default SignIn