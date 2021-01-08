import axios from 'axios'
import { API_URL } from '../utils/config'
const baseUrl = `${API_URL}/breweries`

const getAll = async () => {
    /*
    const response = [
        { id: 1, name: 'brewery1', year: 1899, country: { id: 1, name: 'Germany' }, status: 'active' },
        { id: 2, name: 'brewery2', year: 1990, country: { id: 2, name: 'Finland' }, status: 'active' }
    ]
    */
    const response = await axios.get(baseUrl)
    return response.data
}

const breweriesService = {
    getAll
}

export default breweriesService