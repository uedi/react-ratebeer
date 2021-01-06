import React from 'react'
import { useField } from '../hooks'
import { TextField, Button } from '@material-ui/core'

const CreateStyleForm = ({ handleCreateStyle }) => {
    const name = useField('text')
    const description = useField('text')

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreateStyle({
            name: name.value,
            description: description.value
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-item'>
                <TextField className='form-textfield' id='name' label='name' {...name} />
            </div>
            <div className='form-item'>
                <TextField 
                    className='form-textfield' 
                    id='description' 
                    label='description' 
                    {...description} 
                    multiline={true}
                    rows={5}
                />
            </div>
            <Button className='form-submit-button' type='submit'>Create</Button>
        </form>        
    )

}

export default CreateStyleForm