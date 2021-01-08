import axios from 'axios'
const baseUrl = '/api/styles'

const getAll = async () => {
    /*
    const response = [
        { id: 1, name: 'Weizen' },
        { id: 2, name: 'IPA' }
    ]
    */
    const response = await axios.get(baseUrl)
    return response.data
}

const stylesService = {
    getAll
}

export default stylesService