import React from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'

interface ModalRemoverMembroProps {
  visible: boolean
  nome: string
  onClose: () => void
  onConfirmar: () => void
}

export function ModalRemoverMembro({
  visible,
  nome,
  onClose,
  onConfirmar,
}: ModalRemoverMembroProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={() => { }}>
          <Feather name="trash-2" size={30} color="#DC2626" style={{ marginBottom: 4 }} />
          <Text style={styles.title}>
            <Text style={{ fontWeight: 'bold' }}>Confirmar remoção de {nome}?</Text>
          </Text>
          <Text style={styles.body}>
            Essa ação irá remover o integrante <Text style={{ fontWeight: 'bold' }}>{nome}</Text> da casa. Ele perderá o acesso a todas as funcionalidades e dados do grupo. Deseja prosseguir?
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirmar}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}