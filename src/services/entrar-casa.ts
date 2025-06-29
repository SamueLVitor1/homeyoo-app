import { api } from './api'

export async function entrarNaCasa(codigo: string) {
  try {
    const response = await api.patch(`/casas/entrar/${codigo}`)
    return response.data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Erro ao entrar na casa.')
  }
}