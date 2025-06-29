import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface ModalEntrarCasaProps {
  visible: boolean
  onClose: () => void
}

export function ModalEntrarCasa({ visible, onClose }: ModalEntrarCasaProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Digite o código da casa e clique em avançar
          </Text>

          <TextInput placeholder="Código" style={styles.input} />

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.secondaryButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
