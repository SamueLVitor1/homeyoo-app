import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusCard } from "../../components/status-card";
import { buscarQuantidadeTarefasPendentes } from '../../services/buscar-quantidade-tarefas-pendentes'
import { buscarQuantidadeTarefasConcluidas } from '../../services/buscar-quantidade-tarefas-concluidas'
import { buscarPontuacaoUsuario } from '../../services/buscar-pontuacao-usuario'
import { useEffect, useState } from "react";
import { buscarTarefasPendentes } from "../../services/buscar-tarefas-pendentes";
import { formatarData } from "../../utils/formatar-data";
import { TarefaListagem } from "../../types/tarefa";
import { useTarefasContext } from "../../contexts/tarefas-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StreakInfo } from "../../components/streak-info";

export function HomeScreen() {
  const { tarefasReload } = useTarefasContext()
  const { user, signOut } = useAuth()
  const [pendentes, setPendentes] = useState(0)
  const [concluidas, setConcluidas] = useState(0)
  const [pontuacao, setPontuacao] = useState(0)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation<any>()

  const [tarefasPendentes, setTarefasPendentes] = useState<TarefaListagem[]>([])
  const [loadingPendentes, setLoadingPendentes] = useState(true)

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
  }, [tarefasReload])

  useEffect(() => {
    async function fetchPendentes() {
      setLoadingPendentes(true)
      try {
        const data = await buscarTarefasPendentes()
        setTarefasPendentes(data.tarefas)
      } catch {
        setTarefasPendentes([])
      }
      setLoadingPendentes(false)
    }
    fetchPendentes()
  }, [tarefasReload])



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
      <View style={styles.tarefasContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Próximas tarefas</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Casa')}>
            <Text style={{ color: '#3269e7', fontSize: 13 }}>ver todas</Text>
          </TouchableOpacity>
        </View>

        {/* Tarefas Pendentes */}
        {loadingPendentes ? (
          <Text>Carregando...</Text>
        ) : tarefasPendentes.length === 0 ? (
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            {/* Substitua por um ícone do seu app */}
            <Feather name="clipboard" size={54} color="#bbb" />
            <Text style={{ fontWeight: 'bold', marginTop: 16, fontSize: 16, color: '#666' }}>
              Você ainda não tem tarefas para hoje
            </Text>
            <Text style={{ color: '#888', marginTop: 8, textAlign: 'center' }}>
              Organize a rotina da sua casa adicionando novas tarefas!
            </Text>
          </View>
        ) : tarefasPendentes.slice(0, 3).map((t) => (
          <View key={t._id} style={styles.tarefaCard}>
            <View style={styles.tarefaCardIcon}>
              <Feather name="clipboard" size={22} color="#3269e7" />
            </View>
            <View style={styles.tarefaCardTextContainer}>
              <Text style={styles.tarefaCardTitle}>
                {t.tarefa_id?.nome || 'Tarefa'}
              </Text>
              <Text style={styles.tarefaCardDate}>
                {formatarData(t.data_limite || '')}
              </Text>
            </View>
            <View style={[
              styles.tarefaCardBadge,
              t.status === 'pendente'
                ? styles.tarefaCardBadgePendente
                : styles.tarefaCardBadgeConcluida
            ]}>
              <Feather
                name={t.status === 'pendente' ? 'clock' : 'check'}
                size={15}
                color={t.status === 'pendente' ? '#F7B731' : '#3BA776'}
              />
              <Text style={
                t.status === 'pendente'
                  ? styles.tarefaCardBadgeTextPendente
                  : styles.tarefaCardBadgeTextConcluida
              }>
                {t.status.charAt(0).toUpperCase() + t.status.slice(1)}
              </Text>
            </View>
          </View>
        ))}

      </View>

      <StreakInfo  />
    </LinearGradient>
  )
}