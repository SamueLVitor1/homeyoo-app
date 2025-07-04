import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../contexts/AuthContext'
import { buscarCasaId } from '../../services/buscar-casa-id'
import { ModalEditarNomeCasa } from '../../components/ModalEditarNomeCasa'
import { atualizarCasa } from '../../services/atualizar-casa'
import Toast from 'react-native-toast-message'
import { ModalEditarMetaCasa } from '../../components/ModalEditarMetaCasa'
import { removerMembroCasa } from '../../services/remover-membro'
import { ModalRemoverMembro } from '../../components/ModalRemoverMembro'
import { useTarefasContext } from '../../contexts/tarefas-context'
// Importe o useAuth e outros hooks/contexts se precisar

export function CasaConfigScreen() {
  const { user } = useAuth()
  const houseId = user?.casas?.[0]?.house_id
  const [casaa, setCasa] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [modalNomeVisible, setModalNomeVisible] = useState(false)
  const [reload, setReload] = useState(0)
  const [modalMetaVisible, setModalMetaVisible] = useState(false)
  const [modalRemover, setModalRemover] = useState({ visible: false, nome: '', userId: '' })
  const { fnreloadCasa } = useTarefasContext()

  function openRemoverModal(participante: any) {
    setModalRemover({ visible: true, nome: participante.nome, userId: participante.user_id })
  }

  async function handleConfirmarRemover() {
    try {
      await removerMembroCasa(houseId || '', modalRemover.userId)
      setModalRemover({ visible: false, nome: '', userId: '' })
      setReload(1)
      Toast.show({ type: 'success', text1: 'Membro removido com sucesso!' })
      fnreloadCasa()
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Erro ao remover membro' })
    }
  }

  async function handleSalvarNome(novoNome: string) {
    try {
      await atualizarCasa(houseId || '', { nome: novoNome })
      setModalNomeVisible(false)
      // Depois recarregue os dados da casa para atualizar o nome na tela!
      setReload(1)
      Toast.show({ type: 'success', text1: 'Nome atualizado com sucesso!' })
      fnreloadCasa()
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Erro ao atualizar nome' })
    }
  }

  async function handleSalvarMeta(novaMeta: number) {
    try {
      await atualizarCasa(houseId || '', { metaAtual: novaMeta })
      setModalMetaVisible(false)
      setReload(1)
      Toast.show({ type: 'success', text1: 'Meta atualizada com sucesso!' })
      fnreloadCasa()
    } catch (e) {
      Toast.show({ type: 'error', text1: 'Erro ao atualizar meta' })
    }
  }


  useEffect(() => {
    if (!houseId) return

    async function fetchCasa() {
      setLoading(true)
      try {
        const data = await buscarCasaId(houseId || '')
        console.log(data.casa.casa)
        setCasa(data.casa.casa)
      } catch (e) {
        // Trate o erro, mostre Toast etc.
      }
      setLoading(false)
    }

    fetchCasa()
  }, [houseId, reload])


  const navigation = useNavigation<any>()

  if (loading) {
    return <Text>Carregando</Text>
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../assets/config-header.png')} style={styles.headerImg} />
        </View>

        {/* Nome da casa */}
        <View style={styles.section}>
          <Text style={styles.label}>Nome da casa:</Text>
          <View style={styles.itemRow}>
            <Text style={styles.value}>{casaa!.nome || ''}</Text>
            <TouchableOpacity onPress={() => setModalNomeVisible(true)} >
              <Feather name="edit" size={20} color="#6366F1" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Código da casa */}
        <View style={styles.section}>
          <Text style={styles.label}>Código da casa:</Text>
          <View style={styles.itemRow}>
            <Text style={[styles.value, { color: '#3B82F6' }]}>#{casaa.codigo}</Text>
            <TouchableOpacity style={{ marginLeft: 8 }}>
              <Feather name="copy" size={16} color="#6366F1" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Meta Atual */}
        <View style={styles.section}>
          <Text style={styles.label}>Meta Atual <Text>🏅</Text></Text>
          <View style={styles.itemRow}>
            <Text style={styles.value}>{casaa.metaAtual}xp</Text>
            <TouchableOpacity onPress={() => setModalMetaVisible(true)}>
              <Feather name="edit" size={16} color="#6366F1" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Limpar XP */}
        <TouchableOpacity style={styles.limparXpButton}>
          <Feather name="alert-triangle" size={18} color="#DC2626" style={{ marginRight: 10 }} />
          <Text style={styles.limparXpText}>Limpar XP dos participantes da casa</Text>
        </TouchableOpacity>

        {/* Participantes */}
        <View style={styles.section}>
          <Text style={styles.label}>Participantes:</Text>
          {casaa.membros.map((p: any) => (
            <View key={p.user_id} style={styles.participanteRow}>
              <Text style={styles.participanteNome}>{p.nome}</Text>
              <TouchableOpacity onPress={() => openRemoverModal(p)}>
                <Feather name="trash-2" size={18} color="#DC2626" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Botão Voltar */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.voltarButton}
          activeOpacity={0.8}
        >
          <Feather name="arrow-left" size={16} color="#6B7280" />
          <Text style={{ color: '#6B7280', fontWeight: 'bold', fontSize: 16, marginLeft: 8 }}>
            Voltar
          </Text>
        </TouchableOpacity>

        <ModalEditarNomeCasa
          visible={modalNomeVisible}
          nomeAtual={casaa?.nome || ''}
          onClose={() => setModalNomeVisible(false)}
          onSalvar={handleSalvarNome}
        />
        <ModalEditarMetaCasa
          visible={modalMetaVisible}
          metaAtual={casaa?.metaAtual || 0}
          onClose={() => setModalMetaVisible(false)}
          onSalvar={handleSalvarMeta}
        />

        <ModalRemoverMembro
          visible={modalRemover.visible}
          nome={modalRemover.nome}
          onClose={() => setModalRemover({ visible: false, nome: '', userId: '' })}
          onConfirmar={handleConfirmarRemover}
        />
      </ScrollView>
    )
  }
}
