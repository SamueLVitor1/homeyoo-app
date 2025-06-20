import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export function HomeScreen() {

  const { user, signOut } = useAuth()


  return (
    <View>
      <Text> HomeScreen </Text>
      <Text>Bem-vindo, {user?.nome}</Text>
    </View>
  )
}