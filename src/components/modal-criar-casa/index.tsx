import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Toast from "react-native-toast-message"
import { criarCasa } from "../../services/criar-casa"
import { buscarPerfil } from '../../services/buscar-perfil'
import { useAuth } from '../../contexts/AuthContext'

interface ModalCriarCasaProps {
  visible: boolean
  onClose: () => void
}

const schema = z.object({
  nome: z.string().nonempty("Informe o nome da casa"),
})
type FormData = z.infer<typeof schema>

export function ModalCriarCasa({ visible, onClose }: ModalCriarCasaProps) {
  const { atualizarUsuario } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function handleCreate(data: FormData) {
    console.log(data)
    try {
      const response = await criarCasa(data)

      const usuarioAtualizado = await buscarPerfil()
      atualizarUsuario(usuarioAtualizado)
      Toast.show({
        type: "success",
        text1: "Casa criada com sucesso!",
        position: "bottom",
      })

      reset()
      onClose()
    } catch (error) {
      console.error("Erro ao criar casa:", error)

      Toast.show({
        type: "error",
        text1: "Erro ao criar casa",
        text2: "Tente novamente mais tarde.",
        position: "bottom",
      })
    }
  }
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Crie o nome da sua casa! 🏡</Text>

          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value ?? ""}
                onChangeText={onChange}
                placeholder="Nome da casa"
                style={styles.input}
                placeholderTextColor="#aaa"
              />
            )}
          />
          {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleSubmit(handleCreate)}
          >
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
