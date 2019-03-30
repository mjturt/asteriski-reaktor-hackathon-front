import axios from 'axios'
const url = 'http://localhost:3001/api/register'

const register = async (user) => {
    const response = await axios.post(url, user)
    return response.data
}

export default {register}