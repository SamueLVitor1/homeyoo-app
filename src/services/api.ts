import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.72.250:3333', // ex: http://192.168.0.101:3333
})