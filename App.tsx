import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { TelasPrivadas } from "./src/navigation/pages-privada";
import { ActivityIndicator } from "react-native";
import { TelasPublica } from "./src/navigation/pages-publicas";
import Toast from "react-native-toast-message";
import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar'

function Rotas() {
  const { token, isLoading } = useAuth();

  if (isLoading) return <ActivityIndicator size="large" />;

  return token ? <TelasPrivadas /> : <TelasPublica />;
}

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden') // 👈 esconde totalmente
    NavigationBar.setBehaviorAsync('overlay-swipe') // permite que o usuário revele deslizando
  }, [])


  return (
    <NavigationContainer>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
      <Toast />
    </NavigationContainer>
  );
}
