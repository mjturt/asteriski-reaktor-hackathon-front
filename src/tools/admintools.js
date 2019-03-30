import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/'

let token = null

const setToken = (newToken) => {
    token = `bearer${newToken}`
}

const fetchAll = () => {
    const config = {
        headers: {'Authorization' : token}
    }

    const request = axios.get(baseUrl+'showusers',config)
    return request.then(response => response.data)
}

export default {setToken, fetchAll}