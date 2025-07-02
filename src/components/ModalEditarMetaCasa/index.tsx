import React, { useEffect, useState } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { styles } from './styles'

interface ModalEditarMetaCasaProps {
  visible: boolean
  metaAtual: number
  onClose: () => void
  onSalvar: (novaMeta: number) => void
}

export function ModalEditarMetaCasa({
  visible,
  metaAtual,
  onClose,
  onSalvar,
}: ModalEditarMetaCasaProps) {
  const [novaMeta, setNovaMeta] = useState(metaAtual.toString())

  useEffect(() => {
    setNovaMeta(metaAtual.toString())
  }, [metaAtual, visible])

  function handleSalvar() {
    const meta = parseInt(novaMeta)
    if (!isNaN(meta) && meta > 0) {
      onSalvar(meta)
    }
    // Se quiser, pode mostrar um erro se for inválido
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={() => { }}>
          <Text style={styles.modalTitle}>
            Editar a meta de xp atual! <Text style={styles.modalEmoji}>🏅</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={novaMeta}
            onChangeText={setNovaMeta}
            placeholder="Exemplo: 300"
            placeholderTextColor="#A1A1AA"
            keyboardType="numeric"
            maxLength={5}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSalvar}
              style={styles.saveButton}>
              <Text style={styles.saveText}>Salvar Alterações</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}