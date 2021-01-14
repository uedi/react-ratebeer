import React from 'react'
import CreateStyleForm from './CreateStyleForm'
import stylesService from '../services/styles'
import { useHistory } from 'react-router-dom'

const CreateStyle = () => {
    const history = useHistory()

    const handleCreateStyle = (data) => {
        stylesService.create(data)
        .then(response => {
            console.log('style created:', response)
            history.push('/styles')
        })
        .catch(error => {
            console.log('handleCreateStyle error')
        })
    }

    return (
        <div>
            <h1>New Style</h1>
            <CreateStyleForm handleCreateStyle={handleCreateStyle} />
        </div>
    )
}

export default CreateStyle