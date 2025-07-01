export interface MembroCasa {
  user_id: string
  nome: string
  papel: 'admin' | 'membro'
  avatar?: string
}

export interface Casa {
  _id?: string       // o Mongo geralmente retorna _id
  nome: string
  codigo: string
  data_criacao: string   // ou Date, mas no front normalmente é string
  membros: MembroCasa[]
}