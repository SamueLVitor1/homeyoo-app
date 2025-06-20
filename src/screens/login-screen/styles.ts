import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  imageLogo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 24,
    marginTop: 40
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 34,
    marginTop: 40
  },
  titleMain: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000'
  },
  titleSecondary: {
    fontSize: 16,
    color: '#444',
    marginTop: 4
  },
  form: {
    width: '100%',
    marginBottom: 32
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#22C55E',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
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
    fontWeight: 'bold', 
  },
  passwordContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 48,
    marginBottom: 12
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  }
})
