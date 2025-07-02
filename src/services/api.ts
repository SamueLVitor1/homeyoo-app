import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const api = axios.create({
  baseURL: 'http://192.168.1.2:3333', // ex: http://192.168.1.2:3333
})

const rotasPublicas = ['/login', '/usuarios']

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@token')

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})