import { View, Text, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import { buscarRankingCasa } from '../../services/buscarRankingCasa' 
import { useAuth } from '../../contexts/AuthContext'

export function PodioRanking() {
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
        setMetaXp(data.metaXp) // ou ajuste conforme o retorno da API
      } catch {
        setRanking([])
        setMetaXp(0)
      }
      setLoading(false)
    }
    fetchRanking()
  }, [houseId])

  if (loading) return <Text>Carregando rank...</Text>
  if (!ranking || ranking.length < 3) return null

  return (
    <View style={styles.rankingContainer}>
      <View style={styles.rankingHeader}>
        <Text style={styles.rankingTitle}>Rankeamento 🏆</Text>
        <Text style={styles.metaText}>Meta: {metaXp}xp</Text>
      </View>
      <View style={styles.podio}>
        {/* 2º lugar */}
        <View style={styles.rankBlock2}>
          <Image source={{ uri: ranking[1].avatar }} style={styles.avatar} />
          <Text style={styles.rankName}>{ranking[1].nome}</Text>
          <View style={[styles.rankBar, { backgroundColor: '#D1D5DB', height: 60 }]}>
            <Text style={styles.rankXp}>{ranking[1].pontos}xp</Text>
          </View>
        </View>
        {/* 1º lugar */}
        <View style={styles.rankBlock1}>
          <Image source={{ uri: ranking[0].avatar }} style={styles.avatar} />
          <Text style={styles.rankName}>
            {ranking[0].nome} <Text>🥇</Text>
          </Text>
          <View style={[styles.rankBar, { backgroundColor: '#FACC15', height: 90 }]}>
            <Text style={styles.rankXp}>{ranking[0].pontos}xp</Text>
          </View>
        </View>
        {/* 3º lugar */}
        <View style={styles.rankBlock3}>
          <Image source={{ uri: ranking[2].avatar }} style={styles.avatar} />
          <Text style={styles.rankName}>{ranking[2].nome}</Text>
          <View style={[styles.rankBar, { backgroundColor: '#D97706', height: 45 }]}>
            <Text style={styles.rankXp}>{ranking[2].pontos}xp</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
