import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 16
  },
  titleMain: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
  titleSecondary: {
    fontSize: 16,
    color: '#666',
    marginTop: 4
  },
  form: {
    width: '100%',
    marginBottom: 24
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  passwordContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 48,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  button: {
    backgroundColor: '#22C55E',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 16,
    width: '100%',
    elevation: 2
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  register: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center'
  },
  link: {
    color: '#3B82F6',
    fontWeight: 'bold'
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 8,
    marginBottom: 12,
  },

  inputField: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
})

