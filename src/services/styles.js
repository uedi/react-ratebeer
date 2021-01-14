import axios from 'axios'
const baseUrl = '/api/styles'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async style => {
    const response = await axios.post(baseUrl, style)
    return response.data
}

const stylesService = {
    getAll, create
}

export default stylesService