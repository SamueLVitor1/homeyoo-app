import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusCard } from "../../components/status-card";

export function HomeScreen() {

  const { user, signOut } = useAuth()


  return (
    <LinearGradient
      colors={['#DFF6FD', '#FFF5EC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>


      <View style={styles.headerContainer}>
        <Text style={styles.mainTitle}>
          Olá, {user?.nome}!
        </Text>
        <Text style={styles.secondaryTitle}>
          Vamos deixar tudo em ordem hoje?
        </Text>
      </View>

      <View style={styles.statusCardContainer}>
        <StatusCard iconName="clock" iconColor="#EAB308" label="Tarefas pendentes" value={3} />
        <StatusCard iconName="check-circle" iconColor="#22C55E" label="Concluídas" value={3} />
        <StatusCard iconName="star" iconColor="#FACC15" label="Pontos Atuais" value={3} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Text onPress={signOut} style={{ color: 'blue', marginTop: 20 }}>Sign Out</Text>
      </View>


    </LinearGradient>
  )
}