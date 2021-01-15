import React from 'react'
import { useDispatch } from 'react-redux'
import CreateBeerForm from './CreateBeerForm'
import { addBeer } from '../reducers/beerReducer'
import { useHistory } from 'react-router-dom'
import beersService from '../services/beers'

const CreateBeer = ({ breweries, styles }) => {
    const history = useHistory()
    const dispatch = useDispatch()     
    
    const handleCreateBeer = (beerData) => {
        beersService.create(beerData)
        .then(response => {
            dispatch(addBeer(response))
            history.push('/beers')
        })
        .catch(error => {
            console.log('handleCreateBeer error:', error)
        })
    }

    return (
        <div>
            <h1>New Beer</h1>
            <CreateBeerForm breweries={breweries} styles={styles} handleCreateBeer={handleCreateBeer} />        
        </div>
    )

}

export default CreateBeer