import React from 'react'
import { useField } from '../hooks'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    loginFormField: {
        margin: '0 2em 1em'
    },
    loginButton: {
        margin: '1em 2em'
    }
})

const SignInForm = ({ handleSignIn }) => {

    const classes = useStyles()

    const username = useField('text')
    const password = useField('password')

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSignIn({
            username: username.value,
            password: password.value
        })
    }

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
            <TextField className={classes.loginFormField} id='username' label='username' {...username} />
            <TextField className={classes.loginFormField} id='password' label='password' {...password} />
            <Button className={classes.loginButton} type='submit' color='primary'>Sign in</Button>
        </form>
    )

}

export default SignInForm