import React from 'react'
import CreateStyleForm from './CreateStyleForm'

const CreateStyle = () => {

    const handleCreateStyle = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>New Style</h1>
            <CreateStyleForm handleCreateStyle={handleCreateStyle} />
        </div>
    )
}

export default CreateStyle