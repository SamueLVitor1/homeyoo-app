import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
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
        <Image source={require('../../assets/house-header.png')} style={styles.headerImg} />
        <Text style={styles.title}>CONFIGURAÇÕES</Text>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F8FF' },
  header: { alignItems: 'center', marginBottom: 12 },
  headerImg: { width: '100%', height: 100, resizeMode: 'contain' },
  title: { fontWeight: 'bold', fontSize: 28, marginTop: -20, color: '#166534' },
  section: { marginHorizontal: 24, marginBottom: 24 },
  label: { color: '#334155', fontWeight: 'bold', fontSize: 15, marginBottom: 3 },
  itemRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  value: { fontSize: 16, color: '#222', fontWeight: '500' },
  limparXpButton: {
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 20
  },
  participanteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    elevation: 1
  }
})
