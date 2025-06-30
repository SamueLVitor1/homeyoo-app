import { api } from "./api"

export async function buscarTarefasPendentes() {
  const response = await api.get('/tarefas/pendentes')
  return response.data
}