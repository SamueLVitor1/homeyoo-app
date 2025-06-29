import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { buscarMembrosCasa } from '../../services/buscar-membros'
import { buscarCasaId } from '../../services/buscar-casa-id'

export function UsuarioComCasa() {
  const { user } = useAuth()
  const houseId = user?.casas?.[0]?.house_id // pega a primeira casa do user

  const [caasa, setCasa] = useState<any>(null)
  const [membros, setMembros] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (!houseId) return

    async function fetchMembros() {
      try {
        const data = await buscarMembrosCasa(houseId)
        console.log(data)
        setMembros(data.membros) // ajuste aqui se vier data.membros
      } catch (err) {
        setMembros([])
      }
      setLoading(false)
    }

    async function fetchCasa() {
      try {
        const data = await buscarCasaId(houseId)
        setCasa(data.casa.casa)
      } catch (err) {
        setCasa(null)
      }
      setLoading(false)
    }

    fetchCasa()
    fetchMembros()
  }, [houseId])

  const casa = {
    nome: 'Casa Legal',
    codigo: '#B3up1',
    tarefas: [
      { titulo: 'Tarefa exemplo', responsavel: 'Anna', status: 'Em andamento', avatar: require('../../assets/icon-exemple.png') },
      { titulo: 'Tarefa exemplo', responsavel: 'Anna', status: 'Atrasado', avatar: require('../../assets/icon-exemple.png') },
      { titulo: 'Tarefa exemplo', responsavel: 'Anna', status: 'Atrasado', avatar: require('../../assets/icon-exemple.png') },
      { titulo: 'Tarefa exemplo', responsavel: 'Anna', status: 'Atrasado', avatar: require('../../assets/icon-exemple.png') }
    ],
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
            <Text style={styles.nomeCasa}>{caasa.nome}</Text>
            <Text style={styles.codigoCasa}>#{caasa.codigo}</Text>
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
                <View key={i} style={styles.membroItem}>
                  {/* Se avatar for vazio, coloca imagem default */}
                  <Image
                    source={
                      m.avatar
                        ? { uri: m.avatar }
                        : require('../../assets/profile-icon-default.png')
                    }
                    style={styles.avatar}
                  />
                  <Text>{m.nome}</Text>
                </View>
              ))
            )}
          </View>

          {/* Tarefas */}
          <View style={styles.tarefasContainer}>
            <Text style={styles.sectionTitle}>Tarefas</Text>
            <TouchableOpacity style={styles.novaTarefaButton}>
              <Feather name="plus-square" size={16} color="#4338CA" />
              <Text style={styles.novaTarefaText}>Nova tarefa</Text>
            </TouchableOpacity>
            {casa.tarefas.map((t, i) => (
              <View key={i} style={styles.tarefaItem}>
                <View>
                  <Text style={styles.tituloTarefa}>{t.titulo}</Text>
                  <View style={styles.responsavelContainer}>
                    <Image source={t.avatar} style={styles.responsavelImg} />
                    <Text>{t.responsavel}</Text>
                  </View>

                </View>
                <Text style={{ color: t.status === 'Atrasado' ? 'red' : 'green' }}>{t.status}</Text>
              </View>
            ))}
          </View>

          {/* Rankeamento */}
          <View style={styles.rankingContainer}>
            <View style={styles.rankingHeader}>
              <Text style={styles.rankingTitle}>Rankeamento 🏆</Text>
              <Text style={styles.metaText}>Meta: {casa.metaXp}xp</Text>
            </View>

            <View style={styles.podio}>
              {/* 2º lugar */}
              <View style={styles.rankBlock2}>
                <Image source={{ uri: casa.ranking[1].avatar }} style={styles.avatar} />
                <Text style={styles.rankName}>{casa.ranking[1].nome}</Text>
                <View style={[styles.rankBar, { backgroundColor: '#D1D5DB', height: 60 }]}>
                  <Text style={styles.rankXp}>{casa.ranking[1].xp}xp</Text>
                </View>
              </View>

              {/* 1º lugar */}
              <View style={styles.rankBlock1}>
                <Image source={{ uri: casa.ranking[0].avatar }} style={styles.avatar} />
                <Text style={styles.rankName}>
                  {casa.ranking[0].nome} <Text>🥇</Text>
                </Text>
                <View style={[styles.rankBar, { backgroundColor: '#FACC15', height: 90 }]}>
                  <Text style={styles.rankXp}>{casa.ranking[0].xp}xp</Text>
                </View>
              </View>

              {/* 3º lugar */}
              <View style={styles.rankBlock3}>
                <Image source={{ uri: casa.ranking[2].avatar }} style={styles.avatar} />
                <Text style={styles.rankName}>{casa.ranking[2].nome}</Text>
                <View style={[styles.rankBar, { backgroundColor: '#D97706', height: 45 }]}>
                  <Text style={styles.rankXp}>{casa.ranking[2].xp}xp</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
      </View >
    </ScrollView>
  )
}
