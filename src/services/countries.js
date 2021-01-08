import axios from 'axios'
const baseUrl = 'api/countries'

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