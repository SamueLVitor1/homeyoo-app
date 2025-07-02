export interface CasaUsuario {
  house_id?: string
  papel: 'admin' | 'membro'
}

export interface Usuario {
  _id?: string
  nome: string
  email: string
  senha_hash: string
  avatar?: string
  casas: CasaUsuario[]
  streakAtual?: number        
  maiorStreak?: number           
  ultimoDiaStreak?: string | null  
  data_criacao?: string
}