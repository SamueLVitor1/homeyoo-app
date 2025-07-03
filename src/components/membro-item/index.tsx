import { View, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'; // estilos novos abaixo

export function MembroItem({ membro }: any) {
  // Exemplo de papel/admin
  const isAdmin = membro.papel === 'admin'
  // Pode marcar "você mesmo" comparando com o user logado

  return (
    <View style={styles.membroCard}>
      <View style={styles.avatarBox}>
        <Image
          source={membro.avatar
            ? { uri: membro.avatar }
            : require('../../assets/profile-icon-default.png')
          }
          style={styles.avatarImg}
        />
        {isAdmin && (
          <View style={styles.adminBadge}>
            <Feather name="star" size={13} color="#fff" />
          </View>
        )}
      </View>
      <Text style={styles.membroNome} numberOfLines={1}>
        {membro.nome}
      </Text>
      {/* <Text style={styles.membroPapel}>{membro.papel}</Text> */}
    </View>
  )
}
