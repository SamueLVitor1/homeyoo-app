import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8FF",
    marginTop: 24,
  },
  headerImage: {
    width: "100%",
    height: 150,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24
  },
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    flex: 1,
    paddingBottom: 60
  },
  nomeCasa: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#14532D'
  },
  codigoCasa: {
    fontSize: 16,
    color: '#463E95',
    marginTop: 4,
    fontWeight: '600'
  },
  membrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24
  },
  tarefasContainer: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#166534'
  },
  novaTarefaButton: {
    backgroundColor: '#E0E7FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
    borderRadius: 6,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  novaTarefaText: {
    color: '#4338CA',
    fontWeight: '500'
  },
  // Removido todos os estilos do ranking/rankBlock/podio/metaText/avatar/rankBar etc.
})
