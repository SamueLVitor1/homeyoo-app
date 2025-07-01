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

  const casaTeste = {
    ranking: [
      { nome: 'Alex', xp: 87, avatar: 'https://i.pravatar.cc/150?img=5' },
      { nome: 'Emma', xp: 110, avatar: 'https://i.pravatar.cc/150?img=8' },
      { nome: 'Anna', xp: 57, avatar: 'https://i.pravatar.cc/150?img=9' }
    ],
    metaXp: 200
  }

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
          <View style={styles.rankingContainer}>
            <View style={styles.rankingHeader}>
              <Text style={styles.rankingTitle}>Rankeamento 🏆</Text>
              <Text style={styles.metaText}>Meta: {casaTeste.metaXp}xp</Text>
            </View>

            <View style={styles.podio}>
              {/* 2º lugar */}
              <View style={styles.rankBlock2}>
                <Image source={{ uri: casaTeste.ranking[1].avatar }} style={styles.avatar} />
                <Text style={styles.rankName}>{casaTeste.ranking[1].nome}</Text>
                <View style={[styles.rankBar, { backgroundColor: '#D1D5DB', height: 60 }]}>
                  <Text style={styles.rankXp}>{casaTeste.ranking[1].xp}xp</Text>
                </View>
              </View>

              {/* 1º lugar */}
              <View style={styles.rankBlock1}>
                <Image source={{ uri: casaTeste.ranking[0].avatar }} style={styles.avatar} />
                <Text style={styles.rankName}>
                  {casaTeste.ranking[0].nome} <Text>🥇</Text>
                </Text>
                <View style={[styles.rankBar, { backgroundColor: '#FACC15', height: 90 }]}>
                  <Text style={styles.rankXp}>{casaTeste.ranking[0].xp}xp</Text>
                </View>
              </View>

              {/* 3º lugar */}
              <View style={styles.rankBlock3}>
                <Image source={{ uri: casaTeste.ranking[2].avatar }} style={styles.avatar} />
                <Text style={styles.rankName}>{casaTeste.ranking[2].nome}</Text>
                <View style={[styles.rankBar, { backgroundColor: '#D97706', height: 45 }]}>
                  <Text style={styles.rankXp}>{casaTeste.ranking[2].xp}xp</Text>
                </View>
              </View>
            </View>
          </View>

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
