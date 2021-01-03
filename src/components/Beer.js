import React from 'react'

const Beer = ({ beer }) => {
    if(!beer) {
        return null
    }

    return (
        <div>
            <h2>{beer.name}</h2>
            <p>Brewery: {beer.brewery ? beer.brewery.name : 'no brewery'}</p>
            <p>Style: {beer.style ? beer.style.name : 'no style'}</p>
        </div>
    )
}

export default Beer