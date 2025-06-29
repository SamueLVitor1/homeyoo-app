import { api } from './api'

export async function buscarPontuacaoUsuario() {
  const response = await api.get(`/usuarios/pontuacao`)
  return response.data
}