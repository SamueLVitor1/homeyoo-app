import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import { View } from "react-native"

import { HomeScreen } from "../screens/home-screen"
import { PerfilScreen } from "../screens/perfil-screen"  // você pode criar essa tela já
import { CasaScreen } from "../screens/casa-screen/intex"   // mesma coisa aqui

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#EEF0FF',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#EEF0FF'
        },
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{

              }}
            >
              <Feather name="home" size={22} color={focused ? '#000' : '#999'} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Casa"
        component={CasaScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="list" size={22} color={focused ? '#000' : '#999'} />
          )
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="user" size={22} color={focused ? '#000' : '#999'} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

