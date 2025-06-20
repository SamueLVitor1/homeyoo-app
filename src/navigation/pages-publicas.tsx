import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/login-screen"


const Stack = createNativeStackNavigator()

export function TelasPublica() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      {/* Telas públicas */}
    </Stack.Navigator>
  )
}