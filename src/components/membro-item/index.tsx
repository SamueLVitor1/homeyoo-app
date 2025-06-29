import { View, Text, Image } from 'react-native'
import { membroItemStyles } from './styles'

interface MembroItemProps {
  membro: any
}

export function MembroItem({ membro }: MembroItemProps) {
  return (
    <View style={membroItemStyles.membroItem}>
      <Image
        source={
          membro.avatar
            ? { uri: membro.avatar }
            : require('../../assets/profile-icon-default.png')
        }
        style={membroItemStyles.avatar}
      />
      <Text style={membroItemStyles.nome}>{membro.nome}</Text>
    </View>
  )
}
