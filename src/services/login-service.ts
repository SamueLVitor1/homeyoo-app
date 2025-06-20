import { api } from './api'

interface LoginData {
  email: string
  senha: string
}

export async function loginUser(data: LoginData) {
  const response = await api.post('/login', data)
  return response.data
}
