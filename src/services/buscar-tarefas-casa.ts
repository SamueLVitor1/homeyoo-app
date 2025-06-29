import { api } from './api'

export async function buscarTarefasCasa(houseId: string) {
  const response = await api.get(`/casas/${houseId}/tarefas`)
  return response.data.tarefas 
}