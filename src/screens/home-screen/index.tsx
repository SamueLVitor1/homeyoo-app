import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusCard } from "../../components/status-card";
import { buscarQuantidadeTarefasPendentes } from '../../services/buscar-quantidade-tarefas-pendentes'
import { buscarQuantidadeTarefasConcluidas } from '../../services/buscar-quantidade-tarefas-concluidas'
import { buscarPontuacaoUsuario } from '../../services/buscar-pontuacao-usuario'
import { useEffect, useState } from "react";

export function HomeScreen() {

  const { user, signOut } = useAuth()
  const [pendentes, setPendentes] = useState(0)
  const [concluidas, setConcluidas] = useState(0)
  const [pontuacao, setPontuacao] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDados() {
      setLoading(true)
      try {
        const [resPendentes, resConcluidas, resPontuacao] = await Promise.all([
          buscarQuantidadeTarefasPendentes(),
          buscarQuantidadeTarefasConcluidas(),
          buscarPontuacaoUsuario()
        ])
        setPendentes(resPendentes.quantidadePendentes || 0)
        setConcluidas(resConcluidas.quantidadeConcluidas || 0)
        setPontuacao(resPontuacao.pontuacao || 0)
      } catch (error) {
        setPendentes(0)
        setConcluidas(0)
        setPontuacao(0)
      }
      setLoading(false)
    }

    fetchDados()
  }, [])

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

      {loading ? (
        <Text>Carregando dados...</Text>
      ) : (
        <View style={styles.statusCardContainer}>
          <StatusCard iconName="clock" iconColor="#EAB308" label="Tarefas pendentes" value={pendentes} />
          <StatusCard iconName="check-circle" iconColor="#22C55E" label="Concluídas" value={concluidas} />
          <StatusCard iconName="star" iconColor="#FACC15" label="Pontos Atuais" value={pontuacao} />
        </View>
      )}

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Text onPress={signOut} style={{ color: 'blue', marginTop: 20 }}>Sign Out</Text>
      </View>


    </LinearGradient>
  )
}