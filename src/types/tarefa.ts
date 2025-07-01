export interface TarefaListagem {
  _id: string
  tarefa_id: {
    _id: string
    nome: string
  }
  house_id: string
  responsavel_id: {
    _id: string
    nome: string
    avatar?: string
  }
  pontuacao: number
  status: 'pendente' | 'concluida'
  data_limite?: string
  data_criacao: string
  data_conclusao?: string
  __v?: number
}
