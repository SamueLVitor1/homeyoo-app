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
  tarefasContainer:{
    marginTop: 60
  }
})
