import { api } from './api'

export async function atualizarCasa(casaId: string, payload: { nome?: string, metaAtual?: number }) {
  const response = await api.patch(`/casas/${casaId}`, payload)
  return response.data
}