import { View, Text } from "react-native"

export function UsuarioComCasa({ casa }: any) {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        casa
      </Text>
    </View>
  )
}