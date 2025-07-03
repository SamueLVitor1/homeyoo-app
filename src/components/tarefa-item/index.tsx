import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
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
  const { fnReloadTarefas } = useTarefasContext()
  const { user } = useAuth()

  async function handleConcluirTarefa() {
    try {
      await concluirTarefa({
        house_id: tarefaSelecionada.house_id,
        tarefa_id: tarefaSelecionada._id
      })
      setShowModalConcluir(false)
      setTarefaSelecionada(null)
      fnReloadTarefas()
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao concluir tarefa',
        text2: 'Tente novamente mais tarde.'
      })
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={user._id !== tarefa.responsavel_id._id || !(tarefa.status === 'pendente' || tarefa.status === 'atrasada')}
      onPress={() => {
        setTarefaSelecionada(tarefa)
        setShowModalConcluir(true)
      }}
      style={{ width: '100%' }}
    >
      <View style={tarefaItemStyles.tarefaItem}>
        {/* Avatar + Nome */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image
            source={
              tarefa.responsavel_id?.avatar
                ? { uri: tarefa.responsavel_id.avatar }
                : require('../../assets/profile-icon-default.png')
            }
            style={tarefaItemStyles.responsavelImg}
          />
          <View>
            <Text style={tarefaItemStyles.tituloTarefa}>{tarefa.tarefa_id?.nome || 'Tarefa'}</Text>
            <Text style={tarefaItemStyles.responsavelNome}>{tarefa.responsavel_id?.nome || '-'}</Text>
          </View>
        </View>
        {/* Direita: status, data, xp */}
        <View style={{ alignItems: 'flex-end', justifyContent: 'center', minWidth: 98 }}>
          <View style={[
            tarefaItemStyles.badgeStatus,
            isAtrasado ? tarefaItemStyles.badgeAtrasado : tarefaItemStyles.badgePendente
          ]}>
            <Feather
              name={isAtrasado ? 'alert-circle' : 'clock'}
              size={16}
              color={isAtrasado ? '#B23B3B' : '#A49620'}
              style={{ marginRight: 3 }}
            />
            <Text style={[
              tarefaItemStyles.badgeStatusText,
              isAtrasado ? tarefaItemStyles.badgeAtrasadoText : tarefaItemStyles.badgePendenteText
            ]}>
              {isAtrasado ? 'Atrasado' : (tarefa.status.charAt(0).toUpperCase() + tarefa.status.slice(1))}
            </Text>
          </View>
          <Text style={tarefaItemStyles.dataLimite}>
            {isAtrasado ? 'Expirou em' : 'Até'} {new Date(tarefa.data_limite).toLocaleDateString('pt-BR')}
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
