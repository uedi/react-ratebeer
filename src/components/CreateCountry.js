import React from 'react'
import CreateCountryForm from './CreateCountryForm'
import countriesService from '../services/countries'

const CreateCountry = () => {
    
    const handleCreateCountry = (data) => {
        countriesService.create(data)
        .then(response => {
            console.log('created country:', response)
        })
        .catch(error => {
            console.log('handleCreateCountry error', error)
        })
    }

    return (
        <div>
            <h1>New country</h1>
            <CreateCountryForm handleCreateCountry={handleCreateCountry} />
        </div>
    )

}

export default CreateCountry