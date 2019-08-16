import axios from 'axios'
const baseUrl = process.env.KEEPWORK_API_PREFIX
axios.interceptors.response.use(res => res.data)

const get = (url) => axios.get(`${baseUrl}/${url}`)
const post = (url, params) => axios.post(`${baseUrl}/${url}`, params)

export { get, post }