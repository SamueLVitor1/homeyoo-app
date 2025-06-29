import { api } from './api'

export async function buscarQuantidadeTarefasConcluidas() {
  const response = await api.get(`/tarefas/concluidas`)
  return response.data
}