import axios from 'axios'
const signUpUrl = '/api/signup'
const loginUrl = '/api/login'

const signUp = async credentials => {
    const response = await axios.post(signUpUrl, credentials)
    return response.data
}

const login = async credentials => {
    const response = await axios.post(loginUrl, credentials)
    return response.data
}

const usersService = {
    signUp, login
}

export default usersService