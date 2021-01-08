import axios from 'axios'
import { API_URL } from '../utils/config'
const baseUrl = `${API_URL}/countries`


const getAll = async () => {
    /*
    const response = [
        {
            id: 1,
            name: 'Germany',
            breweries: 0,
            beers: 0
        }
    ]
    */
    const response = await axios.get(baseUrl)
    return response.data
}

const countriesService = {
    getAll
}

export default countriesService