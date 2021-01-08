import axios from 'axios'
import { API_URL } from '../utils/config'
const baseUrl = `${API_URL}/beers`

const getAll = async () => {
    /*
    const response = [
        { id: 1, name: 'beer1', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 5.0 },
        { id: 2, name: 'beer2', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 4.4 },
        { id: 3, name: 'beer3', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 3.3 },
        { id: 4, name: 'beer4', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 2.0 }
    ]
    */
    const response = await axios.get(baseUrl)
    return response.data
}

const beersService = {
    getAll
}

export default beersService