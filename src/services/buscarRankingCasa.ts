import { api } from "./api"

export async function buscarRankingCasa(idCasa: string) {
  const response = await api.get(`/casas/${idCasa}/ranking`)
  return response.data
}