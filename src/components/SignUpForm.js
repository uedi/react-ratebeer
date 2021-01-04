import React from 'react'
import { useField } from '../hooks'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles({
    signUpForm: theme.form,
    signUpFormField: theme.formTextField,
    signUpFormSubmit: theme.formSubmitButton
})

const SignUpFrom = ({ handleSignUp }) => {
    const classes = useStyles()

    const username = useField('text')
    const password = useField('password')
    const repeatPassword = useField('password')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        handleSignUp({
            username: username.value,
            password: password.value
        })
        
    }

    return (
        <form className={classes.signUpForm} onSubmit={handleSubmit}>
            <TextField className={classes.signUpFormField} id='username' label='username' {...username} />
            <TextField className={classes.signUpFormField} id='password' label='password' {...password} />
            <TextField className={classes.signUpFormField} id='repeat' label='repeat password' {...repeatPassword} />
            <Button className={classes.signUpFormSubmit} type='submit' color='primary'>Sign up</Button>
        </form>
    )

}

export default SignUpFrom