import { api } from './api'

export async function buscarCasaId(casaId: string) {
  const response = await api.get(`/casas/${casaId}`)
  return response.data
}