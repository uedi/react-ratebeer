import { useState } from 'react'

export const useField = (type, init = '') => {
    const [value, setValue] = useState(init)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}