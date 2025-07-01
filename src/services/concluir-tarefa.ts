import { api } from "./api"

interface ConcluirTarefaPayload {
  house_id: string,
  tarefa_id: string
}

export async function concluirTarefa({ house_id, tarefa_id }: ConcluirTarefaPayload) {
  const response = await api.patch('/tarefas/concluir', { house_id, tarefa_id })
  return response.data
}