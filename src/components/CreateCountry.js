import React from 'react'
import { useDispatch } from 'react-redux'
import CreateCountryForm from './CreateCountryForm'
import countriesService from '../services/countries'
import { useHistory } from 'react-router-dom'
import { addCountry } from '../reducers/countryReducer'

const CreateCountry = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleCreateCountry = (data) => {
        countriesService.create(data)
        .then(response => {
            dispatch(addCountry(response))
            history.push('/countries')
        })
        .catch(error => {
            console.log('handleCreateCountry error', error)
        })
    }

    return (
        <div className='page-content'>
            <h1>New country</h1>
            <CreateCountryForm handleCreateCountry={handleCreateCountry} />
        </div>
    )

}

export default CreateCountry