import axios from 'axios'

export {api} 

const api = axios.create({
  baseURL: 'http://localhost:3333'
})
