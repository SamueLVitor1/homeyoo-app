import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    marginTop: 55,
    display: 'flex',
    alignItems: 'center',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 34,
  },
  secondaryTitle: {
    fontSize: 18
  },
  statusCardContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    marginTop: 34,
  },
  tarefasContainer: {
    marginTop: 60,
  },

  // ====== ADICIONE ESTES ======
  tarefaCard: {
    backgroundColor: '#F7FBFF',
    borderRadius: 18,
    padding: 16,
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#2C3A4B',
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1.3,
    borderColor: '#E2ECFA'
  },
  tarefaCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E9F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13
  },
  tarefaCardTextContainer: {
    flex: 1
  },
  tarefaCardTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#243742'
  },
  tarefaCardDate: {
    color: '#6B7B8C',
    fontSize: 13,
    marginTop: 2
  },
  tarefaCardBadge: {
    borderRadius: 13,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    minWidth: 80,
    marginLeft: 8,
    flexDirection: 'row',
    gap: 5
  },
  tarefaCardBadgePendente: {
    backgroundColor: '#FFF8D3',
  },
  tarefaCardBadgeConcluida: {
    backgroundColor: '#E2F9E1',
  },
  tarefaCardBadgeTextPendente: {
    color: '#B49B2B',
    fontWeight: '600',
    fontSize: 14
  },
  tarefaCardBadgeTextConcluida: {
    color: '#2C8852',
    fontWeight: '600',
    fontSize: 14
  },
})
