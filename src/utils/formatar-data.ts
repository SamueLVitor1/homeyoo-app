export function formatarData(dateString: string) {
  const hoje = new Date()
  const data = new Date(dateString)
  if (
    data.getDate() === hoje.getDate() &&
    data.getMonth() === hoje.getMonth() &&
    data.getFullYear() === hoje.getFullYear()
  ) {
    return "Hoje"
  }
  // Amanhã
  const amanha = new Date()
  amanha.setDate(hoje.getDate() + 1)
  if (
    data.getDate() === amanha.getDate() &&
    data.getMonth() === amanha.getMonth() &&
    data.getFullYear() === amanha.getFullYear()
  ) {
    return "Amanhã"
  }
  // Outro caso
  return data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })
}
