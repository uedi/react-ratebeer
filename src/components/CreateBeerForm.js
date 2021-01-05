import React, { useState } from 'react'
import { useField } from '../hooks'
import { TextField, 
    Button,
    InputLabel,
    FormControl,
    NativeSelect
} from '@material-ui/core'

const CreateBeerForm = ({ breweries, styles, handleCreateBeer }) => {
    
    const name = useField('text')
    const [selectedBrewery, setSelectedBrewery] = useState('')
    const [selectedStyle, setSelectedStyle] = useState('')

    const handleBrewerySelect = (event) => {
        setSelectedBrewery(event.target.value)
    }

    const handleStyleSelect = (event) => {
        setSelectedStyle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreateBeer({
            name: name.value,
            brewery: selectedBrewery,
            style: selectedStyle
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-item'>
                <TextField className='form-textfield' id='name' label='name' {...name} />
            </div>
            <div className='form-item'>
                <FormControl>
                    <InputLabel shrink>
                        Brewery
                    </InputLabel>
                    <NativeSelect
                        value={selectedBrewery}
                        onChange={handleBrewerySelect}
                        inputProps={{
                            name: 'brewery',
                            id: 'brewery-native-label-placeholder'
                        }}
                    >
                        <option value="">None</option>
                        { breweries && breweries.map(brewery =>
                            <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
                        )}
                    </NativeSelect>
                </FormControl>
            </div>
            <div className='form-item'>
            <FormControl>
                <InputLabel shrink>
                    Style
                </InputLabel>
                <NativeSelect
                    value={selectedStyle}
                    onChange={handleStyleSelect}
                    inputProps={{
                        name: 'style',
                        id: 'style-native-label-placeholder'
                    }}
                >
                    <option value="">None</option>
                    { styles && styles.map(style =>
                        <option key={style.id} value={style.id}>{style.name}</option>
                    )}
                </NativeSelect>
            </FormControl>
            </div>
            <Button className='form-submit-button' type='submit'>Create</Button>
        </form>
    )

}

export default CreateBeerForm