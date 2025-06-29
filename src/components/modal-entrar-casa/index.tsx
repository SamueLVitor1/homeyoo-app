import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { z } from 'zod'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Toast from 'react-native-toast-message'
import { buscarPerfil } from '../../services/buscar-perfil'
import { entrarNaCasa } from '../../services/entrar-casa'
import { useAuth } from '../../contexts/AuthContext'

interface ModalEntrarCasaProps {
  visible: boolean
  onClose: () => void
}


const schema = z.object({
  codigo: z.string().min(1, 'Informe o código da casa'),
})

type FormData = z.infer<typeof schema>

export function ModalEntrarCasa({ visible, onClose }: ModalEntrarCasaProps) {
  const { atualizarUsuario } = useAuth()
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })


  async function onSubmit(data: FormData) {
    console.log(data)
    try {
      const response = await entrarNaCasa(data.codigo)

      const usuarioAtualizado = await buscarPerfil()
      atualizarUsuario(usuarioAtualizado)
      Toast.show({
        type: "success",
        text1: "Você entrou na casa com sucesso!",
        position: "bottom",
      })

      reset()
      onClose()
    } catch (error) {
      console.error("Erro ao criar casa:", error)

      Toast.show({
        type: "error",
        text1: "Erro ao entrar na casa",
        text2: "Tente novamente mais tarde.",
        position: "bottom",
      })
    }
  }


  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Digite o código da casa e clique em avançar
          </Text>

          <Controller
            name="codigo"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Código"
                style={[styles.input, errors.codigo && { borderColor: 'red' }]}
                value={value}
                onChangeText={onChange}
                autoCapitalize="characters"
              />
            )}
          />
          {errors.codigo && (
            <Text style={{ color: 'red', marginBottom: 8 }}>
              {errors.codigo.message}
            </Text>
          )}

          <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
            <Text style={styles.primaryButtonText}>
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.secondaryButton}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
