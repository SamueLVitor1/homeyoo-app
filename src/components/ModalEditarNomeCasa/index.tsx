import React, { useEffect, useState } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { styles } from './styles'

interface ModalEditarNomeCasaProps {
  visible: boolean
  nomeAtual: string
  onClose: () => void
  onSalvar: (novoNome: string) => void
}

export function ModalEditarNomeCasa({
  visible,
  nomeAtual,
  onClose,
  onSalvar,
}: ModalEditarNomeCasaProps) {
  const [novoNome, setNovoNome] = useState(nomeAtual)

  useEffect(() => {
    setNovoNome(nomeAtual)
  }, [nomeAtual, visible])

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={() => {}}>
          <Text style={styles.modalTitle}>
            Editar o nome da casa! <Text style={styles.modalEmoji}>🏠</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={novoNome}
            onChangeText={setNovoNome}
            placeholder="Nome da casa"
            placeholderTextColor="#A1A1AA"
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onSalvar(novoNome)}
              style={styles.saveButton}>
              <Text style={styles.saveText}>Salvar Alterações</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}