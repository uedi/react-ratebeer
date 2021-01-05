import React from 'react'
import { useSelector } from 'react-redux'
import BreweriesTable from './BreweriesTable'

const Breweries = () => {

    const breweries = useSelector(state => state.breweries)
    
    return (
        <div>
            <h1 className='table-header'>Breweries</h1>
            { breweries && <BreweriesTable breweries={breweries}/> }
            
        </div>
    )
}

export default Breweries