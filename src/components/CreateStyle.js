import React from 'react'
import { useDispatch } from 'react-redux'
import CreateStyleForm from './CreateStyleForm'
import stylesService from '../services/styles'
import { useHistory } from 'react-router-dom'
import { addStyle } from '../reducers/styleReducer'

const CreateStyle = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleCreateStyle = (data) => {
        stylesService.create(data)
        .then(response => {
            dispatch(addStyle(response))
            history.push('/styles')
        })
        .catch(error => {
            console.log('handleCreateStyle error')
        })
    }

    return (
        <div className='page-content'>
            <h1>New Style</h1>
            <CreateStyleForm handleCreateStyle={handleCreateStyle} />
        </div>
    )
}

export default CreateStyle