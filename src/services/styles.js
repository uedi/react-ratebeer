import axios from 'axios'
import { API_URL } from '../utils/config'
const baseUrl = `${API_URL}/styles`

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