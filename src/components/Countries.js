import React from 'react'
import CountriesTable from './CountriesTable'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Countries = () => {

    const history = useHistory()
    const countries = useSelector(state => state.countries)
    
    const createCountryClicked = () => {
        history.push('/countries/new')
    }

    return (
        <div>
            <h1 className='table-header'>Countries</h1>
            <Button
                className='button'
                style={{ marginLeft: '2em'}}
                onClick={createCountryClicked} 
                color='primary'
            >
                Create country
            </Button>
            { countries && <CountriesTable countries={countries} />}
        </div>
    )
}

export default Countries