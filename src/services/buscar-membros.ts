import { api } from './api'

export async function buscarMembrosCasa(casaId: string) {
  const response = await api.get(`/casas/${casaId}/membros`)
  return response.data
}