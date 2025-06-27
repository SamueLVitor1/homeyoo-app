import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/login-screen"
import { CadastroScreen } from "../screens/cadastro-screen"


const Stack = createNativeStackNavigator()

export function TelasPublica() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
      {/* Telas públicas */}
    </Stack.Navigator>
  )
}