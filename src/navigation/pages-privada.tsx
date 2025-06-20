import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/home-screen"

const Stack = createNativeStackNavigator()

export function TelasPrivadas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}