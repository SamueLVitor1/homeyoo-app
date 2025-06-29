import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    fontSize: 14,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#D1FAE5',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 4,
  },
  criarText: {
    fontWeight: '700',
    color: '#2E7D32',
    fontSize: 17,
  },
  secondaryButton: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: '#F4F4F5',
    borderWidth: 1,
    borderRadius: 8,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 13,
    marginTop: -6,
    marginBottom: 6,
    alignSelf: 'flex-start',
  }
})
