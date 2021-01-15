import axios from 'axios'
const baseUrl = '/api/breweries'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async brewery => {
    const response = await axios.post(baseUrl, brewery)
    return response.data
}

const breweriesService = {
    getAll, create
}

export default breweriesService