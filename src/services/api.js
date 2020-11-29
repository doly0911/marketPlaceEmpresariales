import axios from 'axios'

const api1 = axios.create({
    baseURL: 'api1'
})

const api2 = axios.create({
    baseURL: 'api2'
})

const api3 = axios.create({
    baseURL: 'api3'
})

export default { api1, api2, api3 };