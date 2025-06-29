import React, { useEffect, useState } from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import RNPickerSelect from 'react-native-picker-select'
import DateTimePicker from '@react-native-community/datetimepicker'
import { styles, pickerSelectStyles } from './styles'
import { buscarTiposTarefa } from '../../services/buscar-tipos-tarefa'
import { criarTarefa } from '../../services/criar-tarefa'
import { useAuth } from '../../contexts/AuthContext'
import Toast from 'react-native-toast-message'

interface ModalNovaTarefaProps {
  visible: boolean
  onClose: () => void
  membros: { nome: string, user_id: string }[]
}

const tarefaSchema = z.object({
  tarefa: z.string().min(1, 'Escolha a tarefa'),
  responsavel: z.string().min(1, 'Escolha o responsável'),
  dataEntrega: z.string().min(1, 'Informe a data'),
  pontos: z.string().min(1, 'Informe os pontos'),
})

type FormData = z.infer<typeof tarefaSchema>

export function ModalNovaTarefa({ visible, onClose, membros }: ModalNovaTarefaProps) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(tarefaSchema),
  })

  const { user, token } = useAuth()
  const [tiposTarefa, setTiposTarefa] = useState<{ _id: string, nome: string }[]>([])
  const [loadingTipos, setLoadingTipos] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const houseId = user?.casas?.[0]?.house_id

  useEffect(() => {
    if (!visible) return
    setLoadingTipos(true)
    buscarTiposTarefa()
      .then((tarefas) => setTiposTarefa(tarefas))
      .catch(() => setTiposTarefa([]))
      .finally(() => setLoadingTipos(false))
  }, [visible, ])

  async function handleFormSubmit(data: FormData) {
    if (!houseId) return

    setLoadingSubmit(true)
    try {
      await criarTarefa({
        tarefa_id: data.tarefa,
        house_id: houseId,
        responsavel_id: data.responsavel,
        pontuacao: Number(data.pontos),
        data_limite: new Date(data.dataEntrega).toISOString(),
      })

      Toast.show({
        type: 'success',
        text1: 'Tarefa criada com sucesso!',
      })
      reset()
      onClose()
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar tarefa',
      })
    } finally {
      setLoadingSubmit(false)
    }
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.titulo}>Nova Tarefa</Text>

          {/* Tarefa */}
          <Controller
            control={control}
            name="tarefa"
            render={({ field: { onChange, value } }) => (
              loadingTipos ? (
                <ActivityIndicator size="small" color="#1B4E3B" style={{ marginBottom: 8 }} />
              ) : (
                <RNPickerSelect
                  onValueChange={onChange}
                  value={value}
                  items={tiposTarefa.map(t => ({ label: t.nome, value: t._id }))}
                  placeholder={{ label: 'Escolha a tarefa para o dia', value: '' }}
                  style={pickerSelectStyles}
                />
              )
            )}
          />
          {errors.tarefa && <Text style={styles.errorText}>{errors.tarefa.message}</Text>}

          {/* Responsável */}
          <Controller
            control={control}
            name="responsavel"
            render={({ field: { onChange, value } }) => (
              <RNPickerSelect
                onValueChange={onChange}
                value={value}
                items={membros.map(m => ({ label: m.nome, value: m.user_id }))}
                placeholder={{ label: 'Quem será o responsável?', value: '' }}
                style={pickerSelectStyles}
              />
            )}
          />
          {errors.responsavel && <Text style={styles.errorText}>{errors.responsavel.message}</Text>}

          {/* Data de entrega */}
          <Controller
            control={control}
            name="dataEntrega"
            render={({ field: { onChange, value } }) => (
              <>
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <TextInput
                    style={styles.input}
                    placeholder="Data de Entrega"
                    value={value}
                    editable={false}
                  />
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={value ? new Date(value) : new Date()}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                      setShowDatePicker(false)
                      if (date) onChange(date.toISOString().split('T')[0])
                    }}
                  />
                )}
              </>
            )}
          />
          {errors.dataEntrega && <Text style={styles.errorText}>{errors.dataEntrega.message}</Text>}

          {/* Pontos */}
          <Controller
            control={control}
            name="pontos"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Pontos"
                value={value}
                keyboardType="numeric"
                onChangeText={onChange}
              />
            )}
          />
          {errors.pontos && <Text style={styles.errorText}>{errors.pontos.message}</Text>}

          <View style={styles.botoesRow}>
            <TouchableOpacity style={styles.cancelarBtn} onPress={() => { reset(); onClose(); }} disabled={loadingSubmit}>
              <Text style={styles.cancelarBtnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.concluirBtn} onPress={handleSubmit(handleFormSubmit)} disabled={loadingSubmit}>
              {loadingSubmit
                ? <ActivityIndicator color="#fff" size="small" />
                : <Text style={styles.concluirBtnText}>Concluir</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
