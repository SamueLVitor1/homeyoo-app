import { View, Text, Image, TouchableOpacity } from 'react-native'
import { tarefaItemStyles } from './styles'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { ModalConcluirTarefa } from '../concluir-tarefa'
import { concluirTarefa } from '../../services/concluir-tarefa'
import Toast from 'react-native-toast-message'
import { useTarefasContext } from '../../contexts/tarefas-context'

interface TarefaItemProps {
  tarefa: any
  isAtrasado: boolean
}

export function TarefaItem({ tarefa, isAtrasado }: TarefaItemProps) {
  const [showModalConcluir, setShowModalConcluir] = useState(false)
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null)
  const { fnReloadTarefas, reload } = useTarefasContext()

  const { user } = useAuth()

  async function handleConcluirTarefa() {
    console.log(tarefaSelecionada.house_id)
    console.log(tarefaSelecionada._id)

    try {
      await concluirTarefa({
        house_id: tarefaSelecionada.house_id,
        tarefa_id: tarefaSelecionada._id
      })


      reload()
      setShowModalConcluir(false)
      setTarefaSelecionada(null)
      fnReloadTarefas()
    } catch (error) {
      console.log(error)
      // Aqui pode mostrar um Toast de erro se quiser
      Toast.show({
        type: 'error',
        text1: 'Erro ao concluir tarefa',
        text2: 'Tente novamente mais tarde.'
      })
    }
  }
  console.log(user)

  return (
    <TouchableOpacity
      disabled={user._id !== tarefa.responsavel_id._id || !(tarefa.status === 'pendente' || tarefa.status === 'atrasada')}
      onPress={() => {
        setTarefaSelecionada(tarefa)
        setShowModalConcluir(true)
      }}>
      <View style={tarefaItemStyles.tarefaItem}>
        <View>
          <Text style={tarefaItemStyles.tituloTarefa}>{tarefa.tarefa_id?.nome || 'Tarefa'}</Text>
          <View style={tarefaItemStyles.responsavelContainer}>
            {tarefa.responsavel_id?.avatar ? (
              <Image
                source={{ uri: tarefa.responsavel_id.avatar }}
                style={tarefaItemStyles.responsavelImg}
              />
            ) : (
              <Image
                source={require('../../assets/profile-icon-default.png')}
                style={tarefaItemStyles.responsavelImg}
              />
            )}
            <Text>{tarefa.responsavel_id?.nome || '-'}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          {isAtrasado ? (
            <View style={tarefaItemStyles.badgeAtrasado}>
              <Text style={tarefaItemStyles.badgeAtrasadoText}>Atrasado</Text>
            </View>
          ) : (
            <Text style={tarefaItemStyles.badgePendente}>
              <Text style={tarefaItemStyles.badgePendenteText}>
                {tarefa.status.charAt(0).toUpperCase() + tarefa.status.slice(1)}
              </Text>
            </Text>
          )}
          <Text style={tarefaItemStyles.dataLimite}>
            até {new Date(tarefa.data_limite).toLocaleDateString('pt-BR')}
          </Text>
          <Text style={tarefaItemStyles.xpText}>
            +{tarefa.pontuacao}xp
          </Text>
        </View>
      </View>

      <ModalConcluirTarefa
        visible={showModalConcluir}
        onClose={() => setShowModalConcluir(false)}
        onConfirm={handleConcluirTarefa}
        tarefa={tarefaSelecionada}
      />

    </TouchableOpacity>
  )
}