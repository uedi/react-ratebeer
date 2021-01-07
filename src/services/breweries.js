const getAll = () => {
    const response = [
        { id: 1, name: 'brewery1', year: 1899, country: { id: 1, name: 'Germany' }, status: 'active' },
        { id: 2, name: 'brewery2', year: 1990, country: { id: 2, name: 'Finland' }, status: 'active' }
    ]
    return response
}

const breweriesService = {
    getAll
}

export default breweriesService