import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 30, 0.32)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    minWidth: 290,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    color: '#222',
  },
  modalEmoji: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    width: 230,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 22,
    backgroundColor: '#F8FAFC',
    color: '#222',
    fontWeight: '500',
    textAlign: 'center'
  },
  buttonsContainer: {
    width: '100%',
    gap: 10,
  },
  cancelButton: {
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    marginBottom: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 230,
    marginTop: 20
  },
  cancelText: {
    color: '#52525B',
    fontWeight: 'bold',
    fontSize: 15,
  },
  saveButton: {
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ECFDF5',
    borderWidth: 1.5,
    borderColor: '#22C55E',
    alignItems: 'center',
  },
  saveText: {
    color: '#16A34A',
    fontWeight: 'bold',
    fontSize: 15,
  }
})