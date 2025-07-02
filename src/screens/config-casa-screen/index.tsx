import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
// Importe o useAuth e outros hooks/contexts se precisar

export function CasaConfigScreen() {
  // Substitua pelos seus dados reais:
  const casa = {
    nome: 'Casa Legal',
    codigo: 'b3up1',
    metaXp: 200,
    participantes: [
      { nome: 'John doe', id: 1 },
      { nome: 'Maria', id: 2 },
      { nome: 'Teste novo 2', id: 3 }
    ]
  }
  const navigation = useNavigation<any>()
  // Handler para editar nome/meta/código
  const handleEditNome = () => { /* abre input/modal */ }
  const handleEditMeta = () => { /* abre input/modal */ }
  const handleCopiarCodigo = () => { /* copia código */ }
  const handleLimparXP = () => { /* limpa xp de todos */ }
  const handleRemoverParticipante = (id: any) => { /* remove participante */ }

  return (
    <ScrollView style={styles.container}>
      {/* Header customizado */}
      <View style={styles.header}>
        <Image source={require('../../assets/config-header.png')} style={styles.headerImg} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Nome da casa:</Text>
        <View style={styles.itemRow}>
          <Text style={styles.value}>{casa.nome}</Text>
          <TouchableOpacity onPress={handleEditNome}>
            <Feather name="edit-2" size={16} color="#6366F1" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Código da casa:</Text>
        <View style={styles.itemRow}>
          <Text style={[styles.value, { color: '#3B82F6' }]}>#{casa.codigo}</Text>
          <TouchableOpacity onPress={handleCopiarCodigo}>
            <Feather name="copy" size={16} color="#6366F1" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Meta Atual 🏅</Text>
        <View style={styles.itemRow}>
          <Text style={styles.value}>{casa.metaXp}xp</Text>
          <TouchableOpacity onPress={handleEditMeta}>
            <Feather name="edit-2" size={16} color="#6366F1" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.limparXpButton} onPress={handleLimparXP}>
        <Text style={{ color: '#DC2626', fontWeight: '500' }}>Limpar XP dos participantes da casa</Text>
        <Feather name="alert-triangle" size={18} color="#DC2626" style={{ marginLeft: 8 }} />
      </TouchableOpacity>

      {/* Participantes */}
      <View style={styles.section}>
        <Text style={styles.label}>Participantes:</Text>
        {casa.participantes.map((p) => (
          <View key={p.id} style={styles.participanteRow}>
            <Text style={{ flex: 1 }}>{p.nome}</Text>
            <TouchableOpacity onPress={() => handleRemoverParticipante(p.id)}>
              <Feather name="trash-2" size={18} color="#DC2626" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.voltarButton}
      >
        <Feather name="arrow-left" size={14} color="#6B7280" />
        <Text style={{ color: '#6B7280', fontWeight: 'bold' }}>
          Voltar
        </Text>
      </TouchableOpacity>

    </ScrollView>
  )
}
