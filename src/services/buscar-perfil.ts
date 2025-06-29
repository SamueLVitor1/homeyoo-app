import { api } from './api'

export async function buscarPerfil() {
  const response = await api.get('/usuarios/perfil')
  return response.data.usuario
}