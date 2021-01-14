import React from 'react'
import CreateCountryForm from './CreateCountryForm'

const CreateCountry = () => {
    
    const handleCreateCountry = (data) => {
        console.log('create country', data)
    }

    return (
        <div>
            <h1>New country</h1>
            <CreateCountryForm handleCreateCountry={handleCreateCountry} />
        </div>
    )

}

export default CreateCountry