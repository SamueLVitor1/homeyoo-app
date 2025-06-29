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
  membroItem: {
    alignItems: 'center'
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 24,
    marginBottom: 4
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
  rankingContainer: {
    marginBottom: 32
  },
  rankingItem: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  rankingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  rankingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10B981'
  },
  metaText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7C3AED'
  },
  podio: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 12
  },
  rankBlock1: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rankBlock2: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rankBlock3: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rankBar: {
    width: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4
  },
  rankName: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 4
  },
  rankXp: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827'
  },
})
