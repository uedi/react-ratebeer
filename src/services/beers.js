import axios from 'axios'
const baseUrl = '/api/beers'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async beer => {
    const response = await axios.post(baseUrl, beer)
    return response.data
}

const beersService = {
    getAll, create
}

export default beersService