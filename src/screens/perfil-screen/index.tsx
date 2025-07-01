import { Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { PrimaryButton } from "../../components/primary-button";

export function PerfilScreen() {

   const { user, signOut } = useAuth()
  return (
    <View style={{marginTop: 80}}>
      <PrimaryButton title="sair" onPress={signOut}></PrimaryButton>
    </View>
  )
}