import { api } from './api'

export async function buscarQuantidadeTarefasPendentes() {
  const response = await api.get(`/tarefas/pendentes/count`)
  return response.data
}