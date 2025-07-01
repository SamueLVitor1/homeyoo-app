import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/home-screen"
import { TabRoutes } from "./tab-routes"
import { CasaConfigScreen } from "../screens/config-casa-screen"

const Stack = createNativeStackNavigator()

export function TelasPrivadas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="CasaConfig" component={CasaConfigScreen} />
    </Stack.Navigator>
  )
}