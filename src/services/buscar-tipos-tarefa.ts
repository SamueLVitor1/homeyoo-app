import { api } from './api'

export async function buscarTiposTarefa() {
  const response = await api.get('/tarefas/tipos')
  return response.data.tarefas // retorna o array de tarefas
}