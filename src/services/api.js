import axios from 'axios'

const api1 = axios.create({
    baseURL: 'http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/'
})

const api2 = axios.create({
    baseURL: 'http://production.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/'
})

const api3 = axios.create({
    baseURL: 'https://yurgqjbmwb.execute-api.us-east-2.amazonaws.com/dev/'
})

export default { api1, api2, api3 };