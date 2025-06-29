import { api } from './api'

interface NovaTarefaDTO {
  tarefa_id: string
  house_id: string
  responsavel_id: string
  pontuacao: number
  data_limite: string
}

export async function criarTarefa(body: NovaTarefaDTO) {
  const response = await api.post('/tarefas', body)
  return response.data
}