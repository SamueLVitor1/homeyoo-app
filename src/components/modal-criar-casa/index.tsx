import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface ModalCriarCasaProps {
  visible: boolean
  onClose: () => void
}

export function ModalCriarCasa({ visible, onClose }: ModalCriarCasaProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Crie o nome da sua casa! 🏡</Text>

          <TextInput placeholder="Nome da casa" style={styles.input} />

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.criarText} >Criar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.secondaryButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
