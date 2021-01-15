import React from 'react'
import { useSelector } from 'react-redux'
import BreweriesTable from './BreweriesTable'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Breweries = () => {

    const history = useHistory()
    const breweries = useSelector(state => state.breweries)

    const createBreweryClicked = () => {
        history.push('/breweries/new')
    }

    return (
        <div>
            <h1 className='table-header'>Breweries</h1>
            <Button
                className='button'
                style={{ marginLeft: '2em' }}
                onClick={createBreweryClicked}
                color='primary'
            >
                Create brewery
            </Button>
            { breweries && <BreweriesTable breweries={breweries}/> }
            
        </div>
    )
}

export default Breweries