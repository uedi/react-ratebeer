import React from 'react'
import CountriesTable from './CountriesTable'

const Countries = () => {

    const countries = [
        {
            id: 1,
            name: 'Germany',
            breweries: 0,
            beers: 0
        }
    ]

    return (
        <div>
            <h1 className='table-header'>Countries</h1>
            <CountriesTable countries={countries} />
        </div>
    )
}

export default Countries