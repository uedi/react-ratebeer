const getAll = () => {
    const response = [
        {
            id: 1,
            name: 'Germany',
            breweries: 0,
            beers: 0
        }
    ]

    return response
}

const countriesService = {
    getAll
}

export default countriesService