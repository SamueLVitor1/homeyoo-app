import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { buscarMembrosCasa } from '../../services/buscar-membros'
import { buscarCasaId } from '../../services/buscar-casa-id'
import { ModalNovaTarefa } from '../../components/modal-nova-tarefa'
import { buscarTarefasCasa } from '../../services/buscar-tarefas-casa'
import { TarefaItem } from '../../components/tarefa-item'
import { MembroItem } from '../../components/membro-item'
import { useTarefasContext } from '../../contexts/tarefas-context'
import { PodioRanking } from '../../components/podio-ranking'
import { useNavigation } from '@react-navigation/native'

export function UsuarioComCasa() {
  const { reloadFlag, reload } = useTarefasContext()
  const { user } = useAuth()
  const houseId = user?.casas?.[0]?.house_id
  const papel = user?.casas?.[0]?.papel
  const [casa, setCasa] = useState<any>(null)
  const [membros, setMembros] = useState([])
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingTarefas, setLoadingTarefas] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const navigation = useNavigation<any>();
  useEffect(() => {
    if (!houseId) return

    async function fetchMembros() {
      try {
        const data = await buscarMembrosCasa(houseId || '')
        setMembros(data.membros)
      } catch (err) {
        setMembros([])
      }
      setLoading(false)
    }

    async function fetchCasa() {
      try {
        const data = await buscarCasaId(houseId || '')
        setCasa(data.casa.casa)
      } catch (err) {
        setCasa(null)
      }
      setLoading(false)
    }
    fetchCasa()
    fetchMembros()
  }, [houseId])

  useEffect(() => {
    if (!houseId) return

    setLoadingTarefas(true)
    buscarTarefasCasa(houseId)
      .then(data => setTarefas(data))
      .catch(() => setTarefas([]))
      .finally(() => setLoadingTarefas(false))
  }, [houseId, showModal, reloadFlag])

  if (loading || !casa) return <Text>Carregando...</Text>


  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#add9b6", flex: 1 }}>
        <Image
          source={require("../../assets/house-header.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.nomeCasa}>{casa.nome}</Text>
            {papel === 'admin' && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CasaConfig')
                }}
                style={{ marginLeft: 8, position: 'absolute', right: 0, top: 16 }}
                hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
              >
                <Feather name="settings" size={22} color="#6B7280" />
              </TouchableOpacity>
            )}
            <Text style={styles.codigoCasa}>#{casa.codigo}</Text>
          </View>
          <Text style={styles.sectionTitle}>
            Membros
          </Text>

          {/* Membros */}
          <View style={styles.membrosContainer}>
            {loading ? (
              <Text>Carregando...</Text>
            ) : (
              membros.map((m: any, i: number) => (
                <MembroItem key={i} membro={m} />
              ))
            )}
          </View>

          {/* Tarefas */}

          <View style={styles.tarefasContainer}>
            <Text style={styles.sectionTitle}>Tarefas</Text>
            {papel === 'admin' && (
              <TouchableOpacity style={styles.novaTarefaButton} onPress={() => setShowModal(true)}>
                <Feather name="plus-square" size={16} color="#4338CA" />
                <Text style={styles.novaTarefaText}>Nova tarefa</Text>
              </TouchableOpacity>
            )}

            {loadingTarefas ? (
              <Text>Carregando tarefas...</Text>
            ) : tarefas.length === 0 ? (
              <Text style={{ color: '#aaa', marginVertical: 12 }}>Nenhuma tarefa encontrada</Text>
            ) : (
              tarefas.map((t: any, i: number) => {
                const isAtrasado = new Date(t.data_limite) < new Date() && t.status !== 'concluida'
                return (
                  <TarefaItem
                    key={t._id || i}
                    tarefa={t}
                    isAtrasado={isAtrasado}
                  />
                )
              })
            )}
          </View>

          {/* Rankeamento */}
          <PodioRanking />
        </View>
      </View >

      <ModalNovaTarefa
        visible={showModal}
        onClose={() => setShowModal(false)}
        membros={membros} // do seu useState de membros da casa
      />
    </ScrollView>
  )
}
