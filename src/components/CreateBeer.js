import React from 'react'
import CreateBeerForm from './CreateBeerForm'

const CreateBeer = ({ breweries, styles }) => {
        
    const handleCreateBeer = (beerData) => {
        console.log(beerData)
    }

    return (
        <div>
            <h1>New Beer</h1>
            <CreateBeerForm breweries={breweries} styles={styles} handleCreateBeer={handleCreateBeer} />        
        </div>
    )

}

export default CreateBeer