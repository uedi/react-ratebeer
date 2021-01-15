import React, { useState } from 'react'
import { useField } from '../hooks'
import { TextField,
    Button,
    InputLabel,
    FormControl,
    NativeSelect
} from '@material-ui/core'

const CreateBreweryForm = ({ countries, handleCreateBrewery }) => {
    const name = useField('text')
    const year = useField('number')
    const [selectedCountry, setSelectedCountry] = useState('')

    const handleCountrySelect = (event) => {
        setSelectedCountry(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreateBrewery({
            name: name.value,
            year: parseInt(year.value),
            country: selectedCountry
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-item'>
                <TextField className='form-textfield' id='name' label='name' {...name} />
            </div>
            <div className='form-item'>
                <TextField className='form-textfield' id='year' label='year' {...year} />
            </div>
            <div className='form-item'>
                <FormControl>
                    <InputLabel shrink>
                        Country
                    </InputLabel>
                    <NativeSelect
                        value={selectedCountry}
                        onChange={handleCountrySelect}
                        inputProps={{
                            name: 'country',
                            id: 'country-native-label-placeholder'
                        }}
                    >
                        <option value=''>None</option>
                        { countries && countries.map(country => 
                            <option key={country.id} value={country.id}>{country.name}</option>
                        )}
                    </NativeSelect>
                </FormControl>
            </div>
            <Button className='form-submit-button' type='submit'>Create</Button>
        </form>
    )
}

export default CreateBreweryForm