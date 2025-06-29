import { api } from './api'

export async function buscarCasaDoUsuario() {
  const response = await api.get(`/usuarios/casa`)
  return response.data
}