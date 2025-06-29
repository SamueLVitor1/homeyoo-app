import { View, Text, Image } from 'react-native'
import { tarefaItemStyles } from './styles'

interface TarefaItemProps {
  tarefa: any
  isAtrasado: boolean
}

export function TarefaItem({ tarefa, isAtrasado }: TarefaItemProps) {
  return (
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
  )
}