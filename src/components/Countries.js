import React from 'react'
import CountriesTable from './CountriesTable'
import { useSelector } from 'react-redux'

const Countries = () => {

    const countries = useSelector(state => state.countries)
    
    return (
        <div>
            <h1 className='table-header'>Countries</h1>
            { countries && <CountriesTable countries={countries} />}
        </div>
    )
}

export default Countries