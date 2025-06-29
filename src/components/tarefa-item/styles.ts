import { StyleSheet } from 'react-native'

export const tarefaItemStyles = StyleSheet.create({
  tarefaItem: {
    backgroundColor: '#E7F9F2',
    padding: 12,
    borderRadius: 20,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  tituloTarefa: {
    fontSize: 16,
    fontWeight: '600'
  },
  responsavelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 8
  },
  responsavelImg: {
    width: 30,
    height: 30
  },
  badgeAtrasado: {
    backgroundColor: '#ffd5d5',   // rosa clarinho
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  badgeAtrasadoText: {
    color: '#312929',
    fontWeight: '500',
    fontSize: 15,
  },
  badgePendente: {
    backgroundColor: '#fef9c3',   // amarelinho claro
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  badgePendenteText: {
    color: '#312929',
    fontWeight: '500',
    fontSize: 15,
  },
  // Extras do bloco direito
  dataLimite: {
    fontSize: 12,
    color: '#888',
  },
  xpText: {
    fontSize: 12,
    color: '#4834d4',
    fontWeight: 'bold'
  }
})
