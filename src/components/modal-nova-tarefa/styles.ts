import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#F9FFFC',
    padding: 26,
    borderRadius: 20,
    width: '88%',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 7,
  },
  titulo: {
    fontWeight: '700',
    fontSize: 21,
    marginBottom: 14,
    color: '#1B4E3B',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    fontSize: 16,
    color: '#252525'
  },
  botoesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    gap: 8,
  },
  cancelarBtn: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 10,
    marginRight: 8,
  },
  concluirBtn: {
    flex: 1,
    backgroundColor: '#14c46c',
    padding: 12,
    borderRadius: 10,
  },
  cancelarBtnText: {
    color: '#313131',
    textAlign: 'center',
    fontWeight: '600',
  },
  concluirBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  errorText: {
    color: '#ff3333',
    marginBottom: 5,
    fontSize: 13,
    marginLeft: 2,
    fontWeight: '500',
  },
})

// Estilo para Picker do react-native-picker-select
export const pickerSelectStyles = {
  inputIOS: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    fontSize: 16,
    color: '#252525'
  },
  inputAndroid: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    fontSize: 16,
    color: '#252525'
  },
  placeholder: {
    color: '#b3b3b3',
  }
}
