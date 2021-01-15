import React from 'react'
import { useSelector } from 'react-redux'
import BeersTable from './BeersTable'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Beers = () => {

    const history = useHistory()
    const beers = useSelector(state => state.beers)

    const createBeerClicked = () => {
        history.push('/beers/new')
    }

    return (
        <div>
            <h1 className='table-header'>Beers</h1>
            <Button
                className='button'
                style={{ marginLeft: '2em'}}
                onClick={createBeerClicked}
                color='primary'
            >Create beer</Button>
            { beers && <BeersTable beers={beers} /> }
        </div>
    )
}

export default Beers