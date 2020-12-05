import axios from 'axios'

const api1 = axios.create({
    baseURL: 'http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/'
})

const api2 = axios.create({
    baseURL: 'http://production.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/'
})

const api3 = axios.create({
    baseURL: 'api3'
})

export default { api1, api2, api3 };