import { Modal, View, Text, TouchableOpacity, Image } from 'react-native'

interface ModalConcluirTarefaProps {
  visible: any,
  onClose: any,
  onConfirm: any,
  tarefa: any
}

export function ModalConcluirTarefa({ visible, onClose, onConfirm, tarefa }: ModalConcluirTarefaProps) {
  if (!tarefa) return null
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)'
      }}>
        <View style={{
          backgroundColor: '#ecfdf5',
          borderRadius: 24,
          padding: 24,
          alignItems: 'center',
          width: 310
        }}>
          <Image
            source={require('../../assets/logo-login.png')}
            style={{ width: 100, height: 100, marginBottom: 12 }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 21, marginBottom: 8 }}>Tarefa realizada?</Text>
          <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
            Você concluiu a tarefa <Text style={{ fontWeight: 'bold' }}>{tarefa.tarefa_id?.nome}</Text>?
          </Text>
          <View style={{ flexDirection: 'row', gap: 14 }}>
            <TouchableOpacity
              onPress={onClose}
              style={{
                borderWidth: 1,
                borderColor: '#d1d5db',
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 18,
                marginRight: 6,
                backgroundColor: '#fff'
              }}
            >
              <Text style={{ color: '#444' }}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={{
                backgroundColor: '#22c55e',
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 18,
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '600' }}>Concluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
