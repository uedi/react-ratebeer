import React from 'react'
import { useField } from '../hooks'
import { TextField, Button } from '@material-ui/core'

const CreateCountryForm = ({ handleCreateCountry }) => {
    const name = useField('text')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreateCountry({
            name: name.value
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-item'>
                <TextField className='form-textfield' id='name' {...name} />
            </div>
            <Button className='form-submit-button' type='submit'>Create</Button>
        </form>
    )
}

export default CreateCountryForm