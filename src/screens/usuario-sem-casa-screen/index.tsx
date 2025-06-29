import { View, Text } from "react-native"

export function UsuarioSemCasa() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Você ainda não faz parte de uma casa.</Text>
      {/* Botões de "Entrar com código" e "Criar casa" aqui */}
    </View>
  )
}