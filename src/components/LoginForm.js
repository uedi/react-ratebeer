import React from 'react'
import { useField } from '../hooks'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles({
    loginForm: theme.form,
    loginFormField: theme.formTextField,
    loginButton: theme.formSubmitButton
})

const LoginForm = ({ handleLogin }) => {

    const classes = useStyles()

    const username = useField('text')
    const password = useField('password')

    const handleSubmit = (event) => {
        event.preventDefault()
        handleLogin({
            username: username.value,
            password: password.value
        })
    }

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
            <TextField className={classes.loginFormField} id='username' label='username' {...username} />
            <TextField className={classes.loginFormField} id='password' label='password' {...password} />
            <Button className={classes.loginButton} type='submit' color='primary'>Login</Button>
        </form>
    )

}

export default LoginForm