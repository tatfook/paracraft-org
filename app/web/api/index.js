import axios from 'axios'
const baseUrl = 'http://api.dev.kp/core/v0'
axios.interceptors.response.use(res => res.data)

const get = (url) => axios.get(`${baseUrl}/${url}`)
const post = (url, params) => axios.post(`${baseUrl}/${url}`, params)

export { get, post }