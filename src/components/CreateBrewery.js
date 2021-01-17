import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CreateBreweryForm from './CreateBreweryForm'
import breweriesService from '../services/breweries'
import { addBrewery } from '../reducers/breweryReducer'

const CreateBrewery = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    const handleCreateBrewery = (breweryData) => {
        breweriesService.create(breweryData)
        .then(response => {
            dispatch(addBrewery(response))
            history.push('/breweries')
        })
        .catch(error => {
            console.log('handleCreateBrewery error:', error)
        })
    }

    return (
        <div className='page-content'>
            <h1>New Brewery</h1>
            <CreateBreweryForm countries={countries} handleCreateBrewery={handleCreateBrewery} />
        </div>
    )
}

export default CreateBrewery