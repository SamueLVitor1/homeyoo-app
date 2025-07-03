import { StyleSheet } from 'react-native'

export const tarefaItemStyles = StyleSheet.create({
  tarefaItem: {
    backgroundColor: '#F6FCFF',
    paddingHorizontal: 2,
    paddingRight: 6,
    paddingVertical: 16,
    borderRadius: 20,
    marginBottom: 14,
    shadowColor: '#1c3557',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tituloTarefa: {
    fontSize: 14,
    fontWeight: '700',
    color: '#25313D'
  },
  responsavelNome: {
    fontSize: 12,
    color: '#4C6780',
    fontWeight: '500',
    marginTop: 1
  },
  responsavelImg: {
    width: 38,
    height: 38,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E3EFFE',
    backgroundColor: '#fff',
    marginRight: 0
  },
  // Badge container (flex row p/ ícone + texto)
  badgeStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 1,
    marginTop: 2,
    alignSelf: 'flex-end',
    gap: 3
  },
  badgeAtrasado: {
    backgroundColor: '#FFE4E6'
  },
  badgePendente: {
    backgroundColor: '#FFF9C9'
  },
  badgeStatusText: {
    fontWeight: '600',
    fontSize: 13.5,
    marginLeft: 2,
    letterSpacing: 0.1
  },
  badgeAtrasadoText: {
    color: '#B23B3B'
  },
  badgePendenteText: {
    color: '#A49620'
  },
  dataLimite: {
    fontSize: 12,
    color: '#8391A1',
    marginTop: 2
  },
  xpText: {
    fontSize: 13,
    color: '#5F34D4',
    fontWeight: 'bold',
    marginTop: 2
  }
})
