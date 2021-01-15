import React from 'react'
import { useSelector } from 'react-redux'
import CreateBreweryForm from './CreateBreweryForm'

const CreateBrewery = () => {
    const countries = useSelector(state => state.countries)

    const handleCreateBrewery = (breweryData) => {
        console.log(breweryData)
    }

    return (
        <div>
            <h1>New Brewery</h1>
            <CreateBreweryForm countries={countries} handleCreateBrewery={handleCreateBrewery} />
        </div>
    )
}

export default CreateBrewery