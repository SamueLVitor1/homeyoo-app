import { View, Text, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import { buscarRankingCasa } from '../../services/buscarRankingCasa'
import { useAuth } from '../../contexts/AuthContext'
import { useTarefasContext } from '../../contexts/tarefas-context'
import * as Animatable from 'react-native-animatable'
import { buscarCasaId } from '../../services/buscar-casa-id'

export function PodioRanking() {
  const { reloadFlag } = useTarefasContext()
  const { user } = useAuth()
  const houseId = user?.casas?.[0]?.house_id
  const [ranking, setRanking] = useState<any[]>([])
  const [metaXp, setMetaXp] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRanking() {
      if (!houseId) return
      setLoading(true)
      try {
        const data = await buscarRankingCasa(houseId)
        setRanking(data.ranking)

        const dataCasa = await buscarCasaId(houseId)
        setMetaXp(dataCasa.casa.casa.metaAtual || 0)
      } catch {
        setRanking([])
        setMetaXp(0)
      }
      setLoading(false)
    }
    fetchRanking()
  }, [houseId, reloadFlag])

  if (loading) return <Text>Carregando rank...</Text>

  // Quando menos de 2 membros, exibe incentivo
  if (!ranking || ranking.length < 2)
    return (
      <View style={styles.rankingContainer}>
        <View style={styles.rankingHeader}>
          <Text style={styles.rankingTitle}>Rankeamento 🏆</Text>
          <Text style={styles.metaText}>Meta: {metaXp}xp</Text>
        </View>
        <Text style={{ textAlign: 'center', color: '#aaa', marginTop: 20 }}>
          Convide mais membros para começar o ranking!
        </Text>
      </View>
    )

  // Pódio animado (aceita 2 ou 3 membros)
  return (
    <View style={styles.rankingContainer}>
      <View style={styles.rankingHeader}>
        <Text style={styles.rankingTitle}>Rankeamento 🏆</Text>
        <Text style={styles.metaText}>Meta: {metaXp}xp</Text>
      </View>
      <View style={styles.podio}>
        {/* 2º lugar */}
        {ranking[1] && (
          <Animatable.View animation="bounceInUp" delay={200} style={styles.rankBlock2}>
            <Image source={{ uri: ranking[1].avatar }} style={[styles.avatar2, { borderColor: '#D1D5DB', borderWidth: 2 }]} />
            <Text style={styles.rankName}>{ranking[1].nome}</Text>
            <View style={[styles.rankBar, { backgroundColor: '#D1D5DB', height: 60 }]}>
              <Text style={styles.rankXp}>{ranking[1].pontos}xp</Text>
            </View>
          </Animatable.View>
        )}
        {/* 1º lugar */}
        <Animatable.View animation="bounceInUp" delay={0} style={styles.rankBlock1}>
          <Image source={{ uri: ranking[0].avatar }} style={[styles.avatar1, { borderColor: '#FACC15', borderWidth: 3 }]} />
          <Text style={styles.rankName}>
            {ranking[0].nome} <Text style={{ fontSize: 20 }}>🥇</Text>
          </Text>
          <View style={[styles.rankBar, { backgroundColor: '#FACC15', height: 90 }]}>
            <Text style={styles.rankXp}>{ranking[0].pontos}xp</Text>
          </View>
        </Animatable.View>
        {/* 3º lugar */}
        {ranking[2] && (
          <Animatable.View animation="bounceInUp" delay={400} style={styles.rankBlock3}>
            <Image source={{ uri: ranking[2].avatar }} style={[styles.avatar3, { borderColor: '#D97706', borderWidth: 2 }]} />
            <Text style={styles.rankName}>{ranking[2].nome}</Text>
            <View style={[styles.rankBar, { backgroundColor: '#D97706', height: 45 }]}>
              <Text style={styles.rankXp}>{ranking[2].pontos}xp</Text>
            </View>
          </Animatable.View>
        )}
      </View>
      {ranking.length < 3 && (
        <Text style={{ textAlign: 'center', color: '#aaa', marginTop: 20 }}>
          Convide mais membros para completar o ranking!
        </Text>
      )}
    </View>
  )
}
