import { api } from "./api"

interface CriarCasaPayload {
  nome: string
}

export async function criarCasa(payload: CriarCasaPayload) {
  const response = await api.post("/casas", payload)
  return response.data
}