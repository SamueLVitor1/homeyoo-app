import { api } from './api'

interface LoginData {
  nome: string,
  email: string,
  senha: string,
  avatar?: string,
}

export async function criarUsuario(data: LoginData) {
  const response = await api.post('/usuarios', data)
  return response.data
}
