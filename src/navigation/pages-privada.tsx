import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/home-screen"
import { TabRoutes } from "./tab-routes"

const Stack = createNativeStackNavigator()

export function TelasPrivadas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabRoutes} />
    </Stack.Navigator>
  )
}