import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF'
  },
  header: {
    alignItems: 'center',
    marginBottom: 12
  },
  headerImg: {
    marginTop: 30,
    width: '100%',
    height: 140,
    resizeMode: 'cover'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: -20,
    color: '#166534'
  },
  section: {
    marginHorizontal: 24,
    marginBottom: 24
  },
  label: {
    color: '#334155',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  value: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500'
  },
  limparXpButton: {
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 20
  },
  participanteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    elevation: 1
  },
  voltarButton: {
    marginTop: 180,
    marginLeft: 20,
    backgroundColor: '#f4f4f5',
    width: 150,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e4e4e7'
  }
})
