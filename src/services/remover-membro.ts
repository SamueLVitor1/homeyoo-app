// src/services/remover-membro.ts
import { api } from './api'

export async function removerMembroCasa(casaId: string, userId: string) {
  const response = await api.delete(`/casas/${casaId}/membros/${userId}`)
  return response.data
}