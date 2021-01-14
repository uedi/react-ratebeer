import axios from 'axios'
const baseUrl = '/api/countries'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async country => {
    const response = await axios.post(baseUrl, country)
    return response.data
}

const countriesService = {
    getAll, create
}

export default countriesService