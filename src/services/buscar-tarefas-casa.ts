import { api } from './api'

export async function buscarTarefasConcluidasCasa(houseId: string) {
  const response = await api.get(`/casas/${houseId}/tarefas`, {
    params: { status: 'concluida' }
  })
  return response.data.tarefas
}

export async function buscarTarefasPendentesCasa(houseId: string) {
  const response = await api.get(`/casas/${houseId}/tarefas`, {
    params: { status: 'pendente' }
  })
  return response.data.tarefas
}

export async function buscarTarefasCasa(houseId: string) {
  const response = await api.get(`/casas/${houseId}/tarefas`)
  return response.data.tarefas
}