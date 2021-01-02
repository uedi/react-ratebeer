import React from 'react'
import { useSelector } from 'react-redux'
import BeersTable from './BeersTable'

const Beers = () => {

    const beers = useSelector(state => state.beers)

    return (
        <div>
            <h1>Beers</h1>
            { beers && <BeersTable beers={beers} /> }
        </div>
    )
}

export default Beers