import { api } from './api'

export async function buscarQuantidadeTarefasConcluidas() {
  const response = await api.get(`/tarefas/concluidas/count`)
  return response.data
}